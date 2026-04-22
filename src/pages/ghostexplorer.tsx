import React from 'react';
import { useEffect, useState } from 'react';
import {Search, MapPin, Users} from 'lucide-react';

interface GithubUser {
  avatar_url: string;
  login: string;
  name?: string;
  location: string;
  followers: number;
  following: number;
}

export default function GhostExplorer(){
  const [username, setUsername] = useState("");
  const [user, setUser] = useState<GithubUser | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isOnline, setIsOnline] = useState(navigator.onLine);

  useEffect(() => {
    const handleStatus = () => setIsOnline(navigator.onLine);
    window.addEventListener("online", handleStatus);
    window.addEventListener("offline", handleStatus);
    return () => {
      window.removeEventListener("online", handleStatus);
      window.removeEventListener("offline", handleStatus);
    };
  }, []);

  useEffect(() => {
    if (!username) {
      setUser(null);
      setError(null);
      return;
    }

    const controller = new AbortController();

    const fetchData = setTimeout(async () => {
      try {
        setError(null);
        const res = await fetch(`https://api.github.com/users/${username}`, {
          signal: controller.signal
        });
        if (!res.ok) {
          if (res.status === 404) setError("User not found");
          else setError("Error fetching user");
          setUser(null);
          return;
        }
        const data = await res.json();
        console.log("Berhasil fetch data:", data);
        setUser(data);
        if(data.name) document.title = `Viewing ${data.name}`;
      } catch (error: any) {
        if(error.name === "AbortError") {
          console.log("Fetch aborted");
        } else {
          setError("Failed to fetch");
          console.log(error);
        }
      }
    }, 500); // Auto-fetch with 500ms debounce

    return () => {
      clearTimeout(fetchData);
      controller.abort();
      document.title = "Ghost Explorer";
    };
  }, [username]);

  return (
    <div className='min-h-screen bg-slate-950 text-slate-200 flex flex-col items-center py-16 px-4 font-sans'>
      <div className="text-center mb-10">
        <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight pb-2">
          Ghost Explorer
        </h1>
    </div>

      <div className='w-full max-w-md relative flex items-center mb-8 group'>
        <input 
          className='w-full bg-slate-900 border border-slate-700 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/20 text-slate-100 rounded-xl px-5 py-4 pr-14 transition-all outline-none shadow-lg placeholder:text-slate-500 text-lg' 
          type="text" 
          placeholder="Enter GitHub username..."
          value={username} 
          onChange={(e) => setUsername(e.target.value)} 
        />
        <button 
          className='absolute right-2 p-2.5 bg-blue-600 hover:bg-blue-500 text-white rounded-lg transition-colors' 
          aria-label="Search"
          onClick={() => setUsername(username)}
        >
          <Search size={22} />
        </button>
      </div>
      
      {error && (
        <div className="bg-red-500/10 border border-red-500/50 text-red-400 px-4 py-3 rounded-xl flex items-center gap-2 mb-8 animate-pulse shadow-lg">
           <span className="font-medium">{error}</span>
        </div>
      )}

      {user && (
        <div className="w-full max-w-md bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl p-6 md:p-8 hover:border-slate-700 transition-colors">
          <div className="flex flex-col sm:flex-row items-center gap-6">
            <img 
              className='rounded-full w-28 h-28 border-4 border-slate-800 shadow-xl object-cover' 
              src={user.avatar_url} 
              alt={user.login} 
            />
            <div className="text-center sm:text-left flex-1">
              <h2 className="text-2xl font-bold text-white">{user.name || user.login}</h2>
              <a href={`https://github.com/${user.login}`} target="_blank" rel="noreferrer" className="text-blue-400 font-medium hover:text-blue-300 transition-colors text-lg">@{user.login}</a>
              
              <div className="flex flex-wrap items-center justify-center sm:justify-start gap-3 mt-4 text-sm text-slate-300">
                <div className="flex items-center gap-2 bg-slate-800 px-3 py-1.5 rounded-full border border-slate-700">
                  <Users size={16} className="text-blue-400"/>
                  <span className="font-bold text-white">{user.followers}</span> <span className="opacity-80">followers</span>
                </div>
                <div className="flex items-center gap-2 bg-slate-800 px-3 py-1.5 rounded-full border border-slate-700">
                  <span className="font-bold text-white">{user.following}</span> <span className="opacity-80">following</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-8 pt-6 border-t border-slate-800 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="flex items-center gap-3 text-slate-300 bg-slate-950/50 p-3 rounded-xl border border-slate-800/50">
              <div className="p-2 bg-slate-800 rounded-lg">
                <MapPin size={18} className="text-emerald-400" />
              </div>
              <span className="truncate font-medium">{user.location || "Not specified"}</span>
            </div>

            <div className="flex items-center gap-3 text-slate-300 bg-slate-950/50 p-3 rounded-xl border border-slate-800/50">
              <div className={`w-3 h-3 rounded-full ${isOnline ? "bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.8)]" : "bg-slate-500"}`}></div>
              <span className="font-medium">{isOnline ? "Online" : "Offline"}</span>
            </div>
              <div className='bg-red-700 rounded-xl p-5 items-center'>
              <a href={`https://github.com/${user.login}`} target="_blank" rel="noreferrer" className="text-blue-400 font-medium hover:text-blue-300 transition-colors text-lg">Click to Github</a>
            </div>

          </div>
          
        </div>
      )}
    </div>
  );
}
