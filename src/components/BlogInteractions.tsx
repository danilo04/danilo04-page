import React, { useState, useEffect } from 'react';
import { useTranslations } from '../hooks/useTranslations';

interface Comment {
  id: number;
  author_name: string;
  content: string;
  created_at: string;
}

interface BlogInteractionsProps {
  slug: string;
}

export const BlogInteractions: React.FC<BlogInteractionsProps> = ({ slug }) => {
  const t = useTranslations();
  const [likes, setLikes] = useState<number>(0);
  const [comments, setComments] = useState<Comment[]>([]);
  const [name, setName] = useState('');
  const [commentText, setCommentText] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchInteractions = async () => {
      try {
        const response = await fetch(`/api/posts/${slug}/interactions`);
        if (response.ok) {
          const data = await response.json();
          setLikes(data.likes);
          setComments(data.comments);
        }
      } catch (err) {
        console.error('Error fetching interactions:', err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchInteractions();
  }, [slug]);

  const handleLike = async () => {
    try {
      const response = await fetch(`/api/posts/${slug}/like`, {
        method: 'POST',
      });
      if (response.ok) {
        const data = await response.json();
        setLikes(data.likes);
      }
    } catch (err) {
      console.error('Error liking post:', err);
    }
  };

  const handleSubmitComment = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !commentText.trim()) return;

    setIsSubmitting(true);
    setError(null);

    try {
      const response = await fetch(`/api/posts/${slug}/comments`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          author_name: name,
          content: commentText,
        }),
      });

      if (response.ok) {
        const newComment = await response.json();
        setComments([newComment, ...comments]);
        setCommentText('');
        // We keep the name for the next comment
      } else {
        setError(t.blog.interactions.error);
      }
    } catch (err) {
      setError(t.blog.interactions.error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString(undefined, {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    });
  };

  if (isLoading) {
    return (
      <div className="mt-16 pt-8 border-t border-slate-200 dark:border-slate-700 animate-pulse">
        <div className="h-8 w-48 bg-slate-200 dark:bg-slate-700 rounded mb-8"></div>
        <div className="h-24 bg-slate-100 dark:bg-slate-800 rounded-xl mb-4"></div>
      </div>
    );
  }

  return (
    <div className="mt-16 pt-8 border-t border-slate-200 dark:border-slate-700">
      <div className="flex items-center justify-between mb-8">
        <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
          {t.blog.interactions.comments} ({comments.length})
        </h3>
        
        <button
          onClick={handleLike}
          className="flex items-center gap-2 px-4 py-2 bg-pink-50 dark:bg-pink-900/20 text-pink-600 dark:text-pink-400 rounded-full hover:bg-pink-100 dark:hover:bg-pink-900/30 transition-colors group"
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            width="20" 
            height="20" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round"
            className="group-active:scale-125 transition-transform"
          >
            <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
          </svg>
          <span className="font-bold">{likes} {t.blog.interactions.likes}</span>
        </button>
      </div>

      {/* Comment Form */}
      <form onSubmit={handleSubmitComment} className="mb-12 bg-slate-50 dark:bg-slate-800/50 p-6 rounded-2xl">
        <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-4">
          {t.blog.interactions.addComment}
        </h4>
        
        <div className="space-y-4">
          <div>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder={t.blog.interactions.namePlaceholder}
              className="w-full px-4 py-3 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all dark:text-white"
              required
            />
          </div>
          <div>
            <textarea
              value={commentText}
              onChange={(e) => setCommentText(e.target.value)}
              placeholder={t.blog.interactions.commentPlaceholder}
              rows={4}
              className="w-full px-4 py-3 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all dark:text-white resize-none"
              required
            />
          </div>
          
          {error && <p className="text-red-500 text-sm">{error}</p>}
          
          <button
            type="submit"
            disabled={isSubmitting}
            className="px-6 py-3 bg-primary text-white font-bold rounded-xl hover:bg-primary/90 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            {isSubmitting ? t.blog.interactions.submitting : t.blog.interactions.submit}
          </button>
        </div>
      </form>

      {/* Comments List */}
      <div className="space-y-8">
        {comments.length === 0 ? (
          <p className="text-slate-500 dark:text-slate-400 text-center py-8 italic">
            {t.blog.interactions.noComments}
          </p>
        ) : (
          comments.map((comment) => (
            <div key={comment.id} className="flex gap-4">
              <div className="w-10 h-10 rounded-full bg-slate-200 dark:bg-slate-700 flex items-center justify-center text-slate-500 dark:text-slate-400 font-bold flex-shrink-0">
                {comment.author_name.charAt(0).toUpperCase()}
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <span className="font-bold text-slate-900 dark:text-white">
                    {comment.author_name}
                  </span>
                  <span className="text-xs text-slate-500 dark:text-slate-400">
                    {formatDate(comment.created_at)}
                  </span>
                </div>
                <p className="text-slate-700 dark:text-slate-300 whitespace-pre-wrap">
                  {comment.content}
                </p>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};
