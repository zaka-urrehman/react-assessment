
const Wrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className='max-w-[1640px] mx-auto px-[130px]'>
      {children}
    </div>
  )
}

export default Wrapper