```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Correct logic
    if (count > 5) {
      // Avoid resetting count directly
    }
  }, [count]);

  const handleIncrement = () => {
    setCount((prevCount) => (prevCount > 5 ? prevCount : prevCount + 1));
  };

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={handleIncrement}>Increment</button>
    </div>
  );
}
```