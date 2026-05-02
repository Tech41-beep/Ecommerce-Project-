import React from 'react'

function TopBar() {
  return (
     <div className="fixed top-0 left-0 w-full z-[60] border-b border-slate-200 bg-slate-950 px-4 py-3 text-center text-sm text-white">
      Free shipping on orders over <span className="font-semibold text-amber-300">$50</span> with fast delivery and easy returns.
    </div>
  )
}

export default TopBar