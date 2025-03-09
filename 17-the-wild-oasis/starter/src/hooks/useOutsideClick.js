import { useEffect, useRef } from "react";

export function useOutsideClick(
  handler,
  listenCapturing = true,
  className = null
) {
  const ref = useRef();

  useEffect(
    function () {
      function handleClick(e) {
        if (ref.current && !ref.current.contains(e.target)) {
          if (className && e.target.closest(className)) {
            return;
          }
          handler();
        }
      }

      document.addEventListener("click", handleClick, listenCapturing);

      return function () {
        document.removeEventListener("click", handleClick, listenCapturing);
      };
    },
    [handler, listenCapturing, className]
  );

  return ref;
}
