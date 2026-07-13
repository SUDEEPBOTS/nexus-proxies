import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Key, ShieldCheck, Copy, Check, AlertCircle, FileText, X, Server, Layers } from 'lucide-react';
import './index.css';

// Modal Component
const TermsModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <motion.div 
        className="modal-content"
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        onClick={e => e.stopPropagation()}
      >
        <div className="modal-header">
          <h2><ShieldCheck className="text-accent" /> Terms & Conditions</h2>
          <button className="close-btn" onClick={onClose}>
            <X size={24} />
          </button>
        </div>
        <div className="modal-body">
          <h3>1. Usage of Proxies</h3>
          <p>By using Nexus Proxies, you agree to only use the generated proxies for legal and ethical purposes. We are not responsible for any misuse or illegal activities conducted through these proxies.</p>
          
          <h3>2. API Key Security</h3>
          <p>Your Webshare API Key is processed entirely locally in your browser. We do not store, log, or transmit your API key to any external servers other than Webshare.io.</p>

          <h3>3. Service Availability</h3>
          <p>We do not guarantee the uptime or performance of the proxies. The quality depends entirely on your Webshare.io subscription plan.</p>

          <h3>4. Premium Paid Proxies</h3>
          <p>This tool is designed to format Webshare proxies into Telegram-compatible SOCKS5 formats. It works best with Webshare's Paid plans.</p>
        </div>
        <div className="modal-footer">
          <button className="accept-btn" onClick={onClose}>I Accept & Understand</button>
        </div>
      </motion.div>
    </div>
  );
};

// Proxy Card Component
const ProxyCard = ({ proxy, index }) => {
  const [copied, setCopied] = useState(false);
  const link = `https://t.me/socks?server=${proxy.proxy_address}&port=${proxy.port}&user=${proxy.username}&pass=${proxy.password}`;

  const handleCopy = () => {
    navigator.clipboard.writeText(link);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <motion.div 
      className="proxy-card"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.05 }}
    >
      <div className="proxy-header">
        <span className="proxy-badge">Proxy {proxy.port}</span>
        <Server size={18} color="var(--text-muted)" />
      </div>
      
      <div className="proxy-ip">{proxy.proxy_address}</div>
      <div className="proxy-port">Port: {proxy.port}</div>
      
      <div className="proxy-link-box">
        {link}
      </div>
      
      <button 
        className={`copy-btn ${copied ? 'copied' : ''}`}
        onClick={handleCopy}
      >
        {copied ? <><Check size={18} /> Copied!</> : <><Copy size={18} /> Copy Link</>}
      </button>
    </motion.div>
  );
};

export default function App() {
  const [apiKey, setApiKey] = useState('');
  const [proxies, setProxies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [isTermsOpen, setIsTermsOpen] = useState(false);
  const [allCopied, setAllCopied] = useState(false);

  const fetchProxies = async () => {
    if (!apiKey.trim()) {
      setError('Error: API Key daalna zaroori hai!');
      return;
    }

    setLoading(true);
    setError('');
    setProxies([]);

    try {
      const response = await fetch('/api/proxies', {
        method: 'GET',
        headers: {
          'Authorization': `Token ${apiKey.trim()}`
        }
      });

      if (response.ok) {
        const data = await response.json();
        const results = data.results || [];
        
        if (results.length === 0) {
          setError('Koi Proxy nahi mili.');
        } else {
          setProxies(results);
        }
      } else if (response.status === 401) {
        setError('Error: API Key galat hai.');
      } else {
        const text = await response.text();
        setError(`Error: ${response.status} - ${text}`);
      }
    } catch (err) {
      setError(`Connection Error: ${err.message}. Please ensure Webshare allows CORS or check your network.`);
    } finally {
      setLoading(false);
    }
  };

  const copyAll = () => {
    const allLinks = proxies.map(p => `https://t.me/socks?server=${p.proxy_address}&port=${p.port}&user=${p.username}&pass=${p.password}`).join('\n\n');
    navigator.clipboard.writeText(allLinks);
    setAllCopied(true);
    setTimeout(() => setAllCopied(false), 2000);
  };

  return (
    <div className="container">
      <header className="header">
        <motion.h1 
          className="title"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Nexus Proxies
        </motion.h1>
        <motion.p 
          className="subtitle"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          Generate Premium Paid Proxies in Seconds
        </motion.p>
      </header>

      <motion.div 
        className="input-section"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
      >
        <Key className="text-muted" size={24} />
        <input 
          type="password" 
          className="api-input" 
          placeholder="Enter Webshare API Key..." 
          value={apiKey}
          onChange={(e) => setApiKey(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && fetchProxies()}
        />
        <button 
          className="generate-btn" 
          onClick={fetchProxies}
          disabled={loading}
        >
          {loading ? (
            <motion.div 
              animate={{ rotate: 360 }} 
              transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
            >
              <Layers />
            </motion.div>
          ) : (
            <><ShieldCheck /> Generate</>
          )}
        </button>
      </motion.div>

      <AnimatePresence>
        {error && (
          <motion.div 
            className="error-msg"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
          >
            <AlertCircle size={20} />
            {error}
          </motion.div>
        )}
      </AnimatePresence>

      {proxies.length > 0 && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <div className="results-header">
            <div className="results-count">
              <span style={{ color: 'var(--accent)' }}>{proxies.length}</span> Premium Proxies Found
            </div>
            <button className="copy-all-btn" onClick={copyAll}>
              {allCopied ? <><Check size={18}/> Copied All!</> : <><Copy size={18}/> Copy All</>}
            </button>
          </div>
          
          <div className="proxies-grid">
            {proxies.map((proxy, index) => (
              <ProxyCard key={proxy.id || index} proxy={proxy} index={index} />
            ))}
          </div>
        </motion.div>
      )}

      <div className="footer-links">
        <a className="footer-link" onClick={() => setIsTermsOpen(true)}>
          <FileText size={14} style={{ display: 'inline', marginRight: '4px', verticalAlign: 'middle' }} />
          Terms & Conditions
        </a>
      </div>

      <AnimatePresence>
        <TermsModal isOpen={isTermsOpen} onClose={() => setIsTermsOpen(false)} />
      </AnimatePresence>
    </div>
  );
}
