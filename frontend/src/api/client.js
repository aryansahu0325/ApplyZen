const BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';

/**
 * Custom wrapper around native fetch for ApplyZen API calls.
 * Automatically handles Content-Type headers, Authorization token attachment, and response error parsing.
 * 
 * @param {string} endpoint The relative endpoint path (e.g. '/auth/login' or 'jobs')
 * @param {RequestInit} options Fetch configuration options
 * @returns {Promise<Response>} The fetch Response promise
 */
export async function apiFetch(endpoint, options = {}) {
  const formattedEndpoint = endpoint.startsWith('/') ? endpoint : `/${endpoint}`;
  const url = `${BASE_URL}${formattedEndpoint}`;

  const headers = { ...options.headers };

  // Automatically add Content-Type: application/json for non-FormData payloads
  if (options.body && !(options.body instanceof FormData) && !headers['Content-Type']) {
    headers['Content-Type'] = 'application/json';
  }

  // Attach Authorization Bearer token if present in localStorage
  const token = localStorage.getItem('applyzen_token');
  if (token) {
    headers['Authorization'] = `Bearer ${token}`;
  }

  const fetchOptions = {
    credentials: 'include',
    ...options,
    headers
  };

  const response = await fetch(url, fetchOptions);

  if (!response.ok) {
    let responseMessage = response.statusText || 'Unknown Error';
    let errorData = null;

    try {
      // Try to extract error message from response JSON body
      errorData = await response.json();
      responseMessage = errorData.message || errorData.error || JSON.stringify(errorData);
    } catch {
      try {
        // Fallback to text response if JSON parsing fails
        const textData = await response.text();
        if (textData) {
          responseMessage = textData;
        }
      } catch {
        // Keep statusText fallback
      }
    }

    const error = new Error(`API Error [Status ${response.status}]: ${responseMessage}`);
    error.status = response.status;
    error.data = errorData;
    throw error;
  }

  return response;
}

/**
 * Retrieve the current authenticated user profile payload.
 *
 * @returns {Promise<object>} The user profile data object.
 */
export async function getCurrentUser() {
  const response = await apiFetch('/api/v1/auth/me');
  const result = await response.json();
  return result.data.user;
}
