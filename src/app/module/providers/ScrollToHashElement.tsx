import { useCallback, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

type TLocationState = {
  anchor?: string;
};

const ScrollToHashElement = () => {
  const { state: locationState, hash } = useLocation();
  const state = locationState as TLocationState;
  const [hashState, setHashState] = useState(hash);
  const removeHashCharacter = (str: string) => str.slice(1);

  const scrollToHashElement = useCallback((hash: string) => {
    const element = document.getElementById(removeHashCharacter(hash));

    if (hash && !!element) {
      element?.scrollIntoView({
        behavior: "smooth",
        inline: "nearest",
      });
    }
  }, []);

  useEffect(() => {
    setHashState(state?.anchor || "");
  }, [state?.anchor]);

  window.onpopstate = () => {
    setTimeout(() => {
      scrollToHashElement(hashState);
    }, 200);
  };

  useEffect(() => {
    if (hashState || hash) {
      scrollToHashElement(hashState || hash);
    }
  }, [hash, hashState, scrollToHashElement, state]);

  return null;
};

export default ScrollToHashElement;
