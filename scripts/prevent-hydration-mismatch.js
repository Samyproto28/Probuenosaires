// This script prevents hydration mismatch errors by removing problematic attributes
// before React can detect them
(function() {
  // Function to remove browser extension attributes that cause hydration issues
  function removeProblematicAttributes() {
    const attributesToRemove = ['bis_skin_checked', 'bis_register'];
    
    attributesToRemove.forEach(attr => {
      const elements = document.querySelectorAll(`[${attr}]`);
      elements.forEach(el => el.removeAttribute(attr));
    });
    
    // Remove attributes that start with __processed_
    const processedElements = document.querySelectorAll('[__processed_]');
    processedElements.forEach(el => {
      Array.from(el.attributes).forEach(attr => {
        if (attr.name.startsWith('__processed_')) {
          el.removeAttribute(attr.name);
        }
      });
    });
  }

  // Run immediately
  removeProblematicAttributes();
  
  // Run again after DOM is fully loaded
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', removeProblematicAttributes);
  } else {
    removeProblematicAttributes();
  }
  
  // Set up a mutation observer to catch any attributes added later
  const observer = new MutationObserver(function(mutations) {
    mutations.forEach(function(mutation) {
      if (mutation.type === 'attributes') {
        const target = mutation.target;
        const attrName = mutation.attributeName;
        
        if (attrName === 'bis_skin_checked' || 
            attrName === 'bis_register' || 
            (attrName && attrName.startsWith('__processed_'))) {
          target.removeAttribute(attrName);
        }
      }
    });
  });
  
  // Start observing the document
  observer.observe(document.body || document.documentElement, {
    attributes: true,
    subtree: true,
    attributeFilter: ['bis_skin_checked', 'bis_register', '__processed_']
  });
})();