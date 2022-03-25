import { useState } from "react";

function UseLocalStorage(key, value) {

  const getLocalData = (key) => {
    return localStorage.getItem(key);
  };

  const setLocalData = (value, key) => {
    if (value && key) {
      return localStorage.setItem(value, JSON.stringify(key));
    }
  };

  const clearLocalData = () => {
    return localStorage.clear();
  };

  const removeLocalData = (key) => {
    return localStorage.removeItem(key);
  };

  const keyIndex = (index) => {
    return localStorage.key(index)
  }

  return {
    getLocalData,
    setLocalData,
    clearLocalData,
    removeLocalData,
    keyIndex
  };
}

export default UseLocalStorage;