import re

with open('src/pages/Dashboard.jsx', 'r', encoding='utf-8') as f:
    content = f.read()

matches = re.findall(r'<span[^>]*material-symbols-outlined[^>]*>([^<]+)</span>', content)
print(set(matches))
