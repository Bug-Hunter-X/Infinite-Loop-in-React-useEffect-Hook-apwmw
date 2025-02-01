# React useEffect Infinite Loop Bug

This repository demonstrates a common bug in React applications where an infinite loop occurs within a `useEffect` hook due to improper state update logic. The bug involves resetting a state variable within the `useEffect` callback, leading to a continuous re-render and infinite loop.

## Bug Description

The `MyComponent` component uses the `useState` hook to manage a count. The `useEffect` hook is designed to reset the count to 0 when it exceeds 5. However, this implementation causes an infinite loop. Every time the count updates, the `useEffect` hook triggers again, resetting the count and triggering another update, creating an endless cycle.

## Solution

The solution involves refactoring the `useEffect` logic to avoid unnecessary state updates and prevent the infinite loop. The solution utilizes a conditional update to avoid the problematic reset within the `useEffect` hook.