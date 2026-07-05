import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Users, 
  ChevronRight, 
  ArrowLeft, 
  Search, 
  MessageSquare, 
  ThumbsUp, 
  Plus, 
  X, 
  TrendingUp
} from 'lucide-react';

const INITIAL_POSTS = [
  {
    id: 1,
    title: "How I optimized my resume for Google and landed 3 interviews in a week!",
    author: {
      name: "Tanya Sharma",
      avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuCBc5ZQgYXHWMZV-OtoGe21jIeqBNhKTr_M8EhfitJdaeImiEy9XurSPLaqk6sAvDImcNoMExE4fM0WgYaxXegb3biyVwRdjnON9upwyQ_t83TmiNxwXvkWNMcBWTk4JyclZ4Wgg8HnJ8RsveG12RwNqi2kMccts3u47Tf1ffzpTSsdBGWS8F2vSmXcbr_JI-EnpuMEBADfzl3OFJcMToqo_zUN0SIg0XaPuhdE4gIjw9eBlAmsMF4NLkX76zsWI_uIKfAbWiYf7BJV",
      title: "Software Engineer"
    },
    category: "Resumes",
    snippet: "I was getting instant rejections for three months. Then I started using the AI ATS match scan, tailored my core skill keywords to match Google's role requirements, and removed multi-column layouts. The difference is night and day!",
    upvotes: 42,
    replies: 12,
    timeAgo: "2 hours ago",
    tags: ["ATS Resume", "Google", "AI Optimization"]
  },
  {
    id: 2,
    title: "AI Agent Negotiation tip: Don't reveal your number first",
    author: {
      name: "Rohan Verma",
      avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuCLVvYUCr6DL6W57xXs0gpBucSujTxxTO3pLR1i2pitAOUTWC-OVNAHXETDFl6kG8rUlojhwsc5XpW4KjpYuHeVazOuSsxKlKVIdh4wVMRU6odXzZqGbysJGyPQNZuk0alLTzZIWywrdDqAkLnAeZzFRHgBlgijGKoWnffDzs9hbH91eF3j_8bunZNhVSIp6C27AxhVKQFHAz94pBIV7OPV4_SVbjAdRejQmkRbTGl4t1qUcB3-NJe2KbQSL9YVm-KMe8FwyrbFAFZc",
      title: "Product Manager"
    },
    category: "Negotiation",
    snippet: "When the recruiter asks about your expectations, say: 'I'm looking for a competitive package aligned with market standards for this position. What is the approved salary band for this role?' It saved me 15k on my current contract!",
    upvotes: 28,
    replies: 7,
    timeAgo: "5 hours ago",
    tags: ["Salary", "Recruiting", "Offer"]
  },
  {
    id: 3,
    title: "Is anyone else syncing multiple inboxes successfully?",
    author: {
      name: "Karan Johar",
      avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuAM28PWdRw3D_qOTnagVBkacnlF5S7lQjh0YibFKkZOK9m6LzqK4PRCCFsRKwsasfyf7nO2xXrXLv9S1155OZ1RvdE1dxuVfxgZKqNWBDwYIcRBN8sDWJx4cDtN3bWmdxsVqD4foPTpqpK7VvpHbEDbVkZKA2xXaotpAakHWzxIlVShro6BvdTJx7WF5ts2qzHxnOWxQ5fG7s-7Dsz7R5W78sfP5r33f1dP6GAeJCOOW1jvVyL0bW0htqpJlmXZa4WVZnBT_vgURGH5",
      title: "Data Analyst"
    },
    category: "AI Agent Automation",
    snippet: "I set up two streams (one personal Gmail, one college email ID) to scan for job alerts and opportunities. The deduplication logic worked perfectly. Highly recommend setting it up if you haven't!",
    upvotes: 19,
    replies: 5,
    timeAgo: "1 day ago",
    tags: ["Integrations", "Inbox Sync"]
  }
];

const CATEGORIES = [
  "All",
  "Resumes",
  "Interview prep",
  "Negotiation",
  "AI Agent Automation",
  "General Discussion"
];

export default function CommunityForum() {
  const navigate = useNavigate();
  const [posts, setPosts] = useState(INITIAL_POSTS);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [createOpen, setCreateOpen] = useState(false);
  const [newPost, setNewPost] = useState({
    title: '',
    category: 'Resumes',
    snippet: '',
    tags: ''
  });

  const handleUpvote = (id) => {
    setPosts(prev => prev.map(p => p.id === id ? { ...p, upvotes: p.upvotes + 1 } : p));
  };

  const handleCreateSubmit = (e) => {
    e.preventDefault();
    if (!newPost.title.trim() || !newPost.snippet.trim()) return;

    const tagsArray = newPost.tags.split(',').map(t => t.trim()).filter(Boolean);
    const postToAdd = {
      id: Date.now(),
      title: newPost.title,
      author: {
        name: "Guest User",
        avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuBdOpaLAVQ2ZkwDPXAK0-pzWy_KVhOXoJcoCJS82j965NeP7qwGd5YEjYh_QXOb-NKWjbHFQ9oOYL4fc9FIJTlTAgysmSm-3ZVSKrfe5jLjQ87ELTEDbwWj_3gMzAduhhGJepS0TOlxZiK6iGOkoAXyUDSwcrPW7tB4N0mraGkEh0VXTUKkbNmYZyRQH0x_NwDEuDMxc6vI7bjNgSwUL0Dd4ZWaOSi1YUVIWMXaiBao1GADF_V0MR7z8UYd9M9nHuvT_p1iCUTKzIkx",
        title: "Product Tester"
      },
      category: newPost.category,
      snippet: newPost.snippet,
      upvotes: 1,
      replies: 0,
      timeAgo: "Just now",
      tags: tagsArray.length > 0 ? tagsArray : [newPost.category]
    };

    setPosts([postToAdd, ...posts]);
    setNewPost({ title: '', category: 'Resumes', snippet: '', tags: '' });
    setCreateOpen(false);
  };

  const filteredPosts = posts.filter(post => {
    const matchesCategory = selectedCategory === "All" || post.category === selectedCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          post.snippet.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="space-y-8 animate-fadeIn pb-8 max-w-[1200px] mx-auto relative">
      
      {/* Page Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-6">
        <div>
          <nav className="flex items-center gap-1 text-sm font-bold text-slate-500 mb-2">
            <span className="cursor-pointer hover:text-primary" onClick={() => navigate('/help-center')}>Help Center</span>
            <ChevronRight className="w-[16px] h-[16px]" />
            <span className="text-primary">Community Forum</span>
          </nav>
          <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight mb-1">ApplyZen Community</h2>
          <p className="text-lg text-slate-600 max-w-xl">Discuss resume strategies, AI agent tips, interview prep, and success stories with fellow job seekers.</p>
        </div>
        <div className="flex gap-3">
          <button 
            onClick={() => setCreateOpen(true)}
            className="flex items-center gap-2 px-5 py-2.5 bg-emerald-600 text-white rounded-xl text-sm font-semibold hover:bg-emerald-700 transition-all active:scale-[0.97] shadow-md shadow-emerald-500/10"
          >
            <Plus className="w-4 h-4" />
            <span>New Discussion</span>
          </button>
          <button 
            onClick={() => navigate('/help-center')}
            className="flex items-center gap-2 px-4 py-2 border border-slate-200 rounded-xl text-sm font-semibold hover:bg-slate-50 text-slate-700 bg-white hover:border-slate-350 transition-all active:scale-[0.97]"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Help Center</span>
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        
        {/* Left Column: Categories Sidebar */}
        <div className="space-y-4">
          <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-sm">
            <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-4 px-1">Categories</h3>
            <nav className="flex flex-col gap-1.5">
              {CATEGORIES.map(cat => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`w-full text-left px-3.5 py-2 rounded-xl text-sm font-semibold transition-all ${selectedCategory === cat ? 'bg-emerald-50 text-emerald-700 font-bold border border-emerald-100/50' : 'text-slate-600 hover:bg-slate-50 hover:text-emerald-700'}`}
                >
                  {cat}
                </button>
              ))}
            </nav>
          </div>

          <div className="bg-gradient-to-br from-emerald-600 to-emerald-800 p-6 rounded-2xl text-white shadow-lg shadow-emerald-950/10 relative overflow-hidden hidden lg:block">
            <div className="absolute right-[-10px] bottom-[-10px] opacity-10">
              <Users className="w-36 h-36" />
            </div>
            <h4 className="text-base font-extrabold mb-1.5 flex items-center gap-1.5">
              <TrendingUp className="w-4 h-4" />
              Community Guidelines
            </h4>
            <p className="text-[11px] text-emerald-100/95 leading-relaxed mb-4">
              Help make our forum a supportive place. Be kind, share constructive resume feedback, and respect other job seekers' journeys.
            </p>
            <span className="text-[10px] font-bold text-white bg-white/10 px-2.5 py-1 rounded-full uppercase tracking-wide">
              Active Community
            </span>
          </div>
        </div>

        {/* Right 3 Columns: Main Feed */}
        <div className="lg:col-span-3 space-y-6">
          {/* Search bar */}
          <div className="bg-white border border-slate-200 rounded-2xl p-4 shadow-sm flex items-center">
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 w-4 h-4" />
              <input
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search discussions, tags, or advice..."
                className="w-full pl-9 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-xl text-sm outline-none focus:bg-white focus:border-primary focus:ring-2 focus:ring-primary/10 transition-all"
              />
            </div>
          </div>

          {/* Posts Feed */}
          {filteredPosts.length === 0 ? (
            <div className="bg-white border border-slate-200 rounded-2xl p-12 text-center text-slate-400 shadow-sm">
              No discussions found in this category.
            </div>
          ) : (
            <div className="space-y-4">
              {filteredPosts.map(post => (
                <div key={post.id} className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm hover:border-slate-300 transition-all flex flex-col justify-between gap-4">
                  <div className="space-y-2">
                    {/* Top Row: Author & Metadata */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <img src={post.author.avatar} alt={post.author.name} className="w-8 h-8 rounded-full object-cover border border-slate-100" />
                        <div>
                          <p className="text-xs font-bold text-slate-800">{post.author.name}</p>
                          <p className="text-[10px] text-slate-400 font-semibold">{post.author.title}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-[10px] bg-slate-100 text-slate-600 px-2 py-0.5 rounded-full font-bold uppercase tracking-wider border border-slate-200/50">
                          {post.category}
                        </span>
                        <span className="text-[10px] text-slate-400 font-semibold">{post.timeAgo}</span>
                      </div>
                    </div>

                    {/* Post Content */}
                    <h3 className="text-base sm:text-lg font-bold text-slate-900 hover:text-emerald-700 transition-colors cursor-pointer leading-tight">
                      {post.title}
                    </h3>
                    <p className="text-sm text-slate-500 leading-relaxed font-medium">
                      {post.snippet}
                    </p>
                  </div>

                  {/* Bottom Row: Actions */}
                  <div className="flex items-center justify-between pt-2 border-t border-slate-50">
                    <div className="flex items-center gap-4">
                      <button 
                        onClick={() => handleUpvote(post.id)}
                        className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold text-slate-500 hover:text-emerald-700 hover:bg-emerald-50 transition-colors"
                      >
                        <ThumbsUp className="w-3.5 h-3.5" />
                        <span>{post.upvotes} Upvotes</span>
                      </button>
                      <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold text-slate-500">
                        <MessageSquare className="w-3.5 h-3.5 text-slate-400" />
                        <span>{post.replies} Replies</span>
                      </div>
                    </div>
                    {/* Tags */}
                    <div className="hidden sm:flex items-center gap-1.5">
                      {post.tags.map(tag => (
                        <span key={tag} className="text-[10px] text-slate-400 bg-slate-50 px-2.5 py-0.5 rounded-full border border-slate-200">
                          #{tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* New Discussion Modal */}
      {createOpen && (
        <div className="fixed inset-0 bg-slate-900/50 backdrop-blur-sm flex items-center justify-center z-50 p-4 animate-in fade-in duration-200">
          <div className="bg-white border border-slate-200 rounded-2xl w-full max-w-lg overflow-hidden shadow-2xl p-6 sm:p-8 animate-in zoom-in-95 duration-200 relative text-slate-950">
            <button 
              onClick={() => setCreateOpen(false)}
              className="absolute right-4 top-4 p-1.5 rounded-lg text-slate-400 hover:text-slate-600 hover:bg-slate-100 transition-all"
            >
              <X className="w-5 h-5" />
            </button>
            <h3 className="text-xl font-bold mb-1 flex items-center gap-2">
              <MessageSquare className="w-5 h-5 text-emerald-600" />
              Start a Discussion
            </h3>
            <p className="text-xs text-slate-400 mb-6">Create a thread to get advice or share tips with the community.</p>

            <form onSubmit={handleCreateSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">Discussion Title</label>
                <input
                  required
                  value={newPost.title}
                  onChange={e => setNewPost({...newPost, title: e.target.value})}
                  placeholder="e.g. Tips on negotiating a Senior React developer offer"
                  className="w-full px-3.5 py-2.5 border border-slate-200 rounded-xl text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/10 transition-all"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">Category</label>
                  <select
                    value={newPost.category}
                    onChange={e => setNewPost({...newPost, category: e.target.value})}
                    className="w-full px-3.5 py-2.5 border border-slate-200 bg-white rounded-xl text-sm outline-none focus:border-primary transition-all"
                  >
                    {CATEGORIES.filter(c => c !== "All").map(c => (
                      <option key={c} value={c}>{c}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">Tags (Comma-separated)</label>
                  <input
                    value={newPost.tags}
                    onChange={e => setNewPost({...newPost, tags: e.target.value})}
                    placeholder="e.g. Negotiation, React"
                    className="w-full px-3.5 py-2.5 border border-slate-200 rounded-xl text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/10 transition-all"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">Discussion details</label>
                <textarea
                  required
                  rows={4}
                  value={newPost.snippet}
                  onChange={e => setNewPost({...newPost, snippet: e.target.value})}
                  placeholder="Write your advice or question details here..."
                  className="w-full px-3.5 py-2.5 border border-slate-200 rounded-xl text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/10 transition-all resize-none"
                />
              </div>

              <div className="flex gap-3 justify-end pt-4 border-t border-slate-100">
                <button
                  type="button"
                  onClick={() => setCreateOpen(false)}
                  className="px-5 py-2.5 border border-slate-200 rounded-xl text-sm font-semibold hover:bg-slate-50 text-slate-700 transition-all"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-5 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-sm font-semibold transition-all shadow-md shadow-emerald-500/10"
                >
                  Post Discussion
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
