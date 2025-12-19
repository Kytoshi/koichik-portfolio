# Button Variants for "View Projects"

Here are different variants you can choose from:

## Variant 1: Current Implementation (Slide Fill with Arrow)
```tsx
<a
  href='#projects'
  className={`group relative inline-flex items-center gap-2 px-8 py-3 border overflow-hidden transition-all duration-300 ${
    darkMode ? "border-stone-100 text-stone-100" : "border-zinc-900 text-zinc-900"
  }`}>
  <span className='relative z-10 transition-transform duration-300 group-hover:translate-x-1'>
    View Projects
  </span>
  <svg className='relative z-10 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M9 5l7 7-7 7' />
  </svg>
  <span className={`absolute inset-0 translate-x-[-100%] transition-transform duration-300 group-hover:translate-x-0 ${darkMode ? "bg-stone-100" : "bg-zinc-900"}`} />
  <span className={`absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100 ${darkMode ? "text-zinc-900" : "text-stone-100"}`} style={{ zIndex: 11 }}>
    <span className='flex items-center justify-center h-full gap-2'>
      <span className='transition-transform duration-300 group-hover:translate-x-1'>View Projects</span>
      <svg className='w-4 h-4 transition-transform duration-300 group-hover:translate-x-1' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
        <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M9 5l7 7-7 7' />
      </svg>
    </span>
  </span>
</a>
```

## Variant 2: Simple Slide Fill (No Arrow)
```tsx
<a
  href='#projects'
  className={`group relative inline-block px-8 py-3 border overflow-hidden transition-all duration-300 ${
    darkMode ? "border-stone-100" : "border-zinc-900"
  }`}>
  <span className={`relative z-10 transition-colors duration-300 ${
    darkMode ? "text-stone-100 group-hover:text-zinc-900" : "text-zinc-900 group-hover:text-stone-100"
  }`}>
    View Projects
  </span>
  <span className={`absolute inset-0 translate-x-[-100%] transition-transform duration-300 group-hover:translate-x-0 ${
    darkMode ? "bg-stone-100" : "bg-zinc-900"
  }`} />
</a>
```

## Variant 3: Bottom Border Expand
```tsx
<a
  href='#projects'
  className={`group relative inline-block px-8 py-3 transition-all duration-300 ${
    darkMode ? "text-stone-100" : "text-zinc-900"
  }`}>
  View Projects
  <span className={`absolute bottom-0 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full ${
    darkMode ? "bg-stone-100" : "bg-zinc-900"
  }`} />
</a>
```

## Variant 4: Scale on Hover
```tsx
<a
  href='#projects'
  className={`group inline-block px-8 py-3 border transition-all duration-300 hover:scale-105 ${
    darkMode
      ? "border-stone-100 text-stone-100 hover:bg-stone-100 hover:text-zinc-900"
      : "border-zinc-900 text-zinc-900 hover:bg-zinc-900 hover:text-stone-100"
  }`}>
  View Projects
</a>
```

## Variant 5: Arrow Slide In from Right
```tsx
<a
  href='#projects'
  className={`group relative inline-flex items-center gap-0 px-8 py-3 border overflow-hidden transition-all duration-300 ${
    darkMode ? "border-stone-100 text-stone-100" : "border-zinc-900 text-zinc-900"
  }`}>
  <span className='relative z-10'>View Projects</span>
  <svg
    className='relative z-10 w-0 opacity-0 transition-all duration-300 group-hover:w-4 group-hover:opacity-100 group-hover:ml-2'
    fill='none'
    stroke='currentColor'
    viewBox='0 0 24 24'>
    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M9 5l7 7-7 7' />
  </svg>
  <span className={`absolute inset-0 scale-x-0 transition-transform duration-300 origin-left group-hover:scale-x-100 ${
    darkMode ? "bg-stone-100" : "bg-zinc-900"
  }`} />
  <span className={`absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100 flex items-center justify-center gap-2 ${
    darkMode ? "text-zinc-900" : "text-stone-100"
  }`} style={{ zIndex: 11 }}>
    <span>View Projects</span>
    <svg className='w-4 h-4' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
      <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M9 5l7 7-7 7' />
    </svg>
  </span>
</a>
```

## Variant 6: Minimal Underline Slide
```tsx
<a
  href='#projects'
  className={`group relative inline-block px-2 py-1 text-lg transition-all duration-300 ${
    darkMode ? "text-stone-100" : "text-zinc-900"
  }`}>
  View Projects →
  <span className={`absolute bottom-0 left-0 w-full h-px origin-left scale-x-0 transition-transform duration-300 group-hover:scale-x-100 ${
    darkMode ? "bg-stone-100" : "bg-zinc-900"
  }`} />
</a>
```

Which variant would you like me to implement?
