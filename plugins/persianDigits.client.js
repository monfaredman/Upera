// Client-only plugin: convert Latin digits (0-9) to Persian digits (۰-۹) in text nodes
export default () => {
  if (!process.client) return

  const map = ['۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹']
  const latinToPersian = (s) => String(s).replace(/\d/g, (d) => map[+d])

  function shouldIgnore(node) {
    const parent = node.parentNode
    if (!parent) return true
    const tag = parent.nodeName
    if (['SCRIPT', 'STYLE', 'CODE', 'PRE', 'INPUT', 'TEXTAREA'].includes(tag))
      return true
    if (parent.closest && parent.closest('[data-no-persian-digits]'))
      return true
    return false
  }

  function convertTextNode(node) {
    if (!node || !node.nodeValue) return
    const newVal = latinToPersian(node.nodeValue)
    if (newVal !== node.nodeValue) node.nodeValue = newVal
  }

  function convertTree(root) {
    try {
      const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, {
        acceptNode(node) {
          if (!node.nodeValue || !node.nodeValue.trim())
            return NodeFilter.FILTER_REJECT
          if (shouldIgnore(node)) return NodeFilter.FILTER_REJECT
          return NodeFilter.FILTER_ACCEPT
        },
      })
      let n
      while ((n = walker.nextNode())) convertTextNode(n)
    } catch (e) {
      // defensive: if TreeWalker not supported or errors, skip
      // console.error(e)
    }
  }

  // Initial conversion
  if (document && document.body) {
    convertTree(document.body)
  }

  // Observe DOM changes and convert new/changed text
  const observer = new MutationObserver((mutations) => {
    for (const m of mutations) {
      if (m.type === 'characterData') {
        convertTextNode(m.target)
      } else {
        m.addedNodes.forEach((node) => {
          if (node.nodeType === Node.TEXT_NODE) {
            convertTextNode(node)
          } else if (node.nodeType === Node.ELEMENT_NODE) {
            convertTree(node)
          }
        })
      }
    }
  })

  observer.observe(document.body, {
    childList: true,
    subtree: true,
    characterData: true,
  })

  // Small helper exposed for manual conversions from console if needed
  window.__convertToPersianDigits = (s) => latinToPersian(String(s))
}
