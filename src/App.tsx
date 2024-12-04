import { useEffect, useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import githubLogo from './assets/github.svg';
import './App.css';

function App() {
  const [count, setCount] = useState(0);
  const [number, setNumber] = useState('豫ICP备2021006397号-2');

  useEffect(() => {
    const originUrl = location.origin;
    if (originUrl.includes('djwl.top')) {
      setNumber('豫ICP备2021006397号-2');
    } else {
      setNumber('豫ICP备2021006397号-1');
    }
  }, []);

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
        <a href="https://github.com/djwlx" target="_blank">
          <img src={githubLogo} className="logo github" alt="Github logo" />
        </a>
      </div>
      <h1>记录软件开发学习</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>count is {count}</button>
        <p>
          <code>DJWL</code>
        </p>
      </div>
      <p className="read-the-docs">Click on the Github logos to know more</p>
      <footer>
        <a href="https://beian.miit.gov.cn/" target="_blank">
          {number}
        </a>
      </footer>
    </>
  );
}

export default App;
