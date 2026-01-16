

const SectionHead = ({subtitle, title}) => {
  return (
    <div>
        <div className="flex items-center gap-x-4">
          <div className="w-5 h-10 bg-red rounded-sm"></div>
          <p className="text-red text-[16px] font-semibold">{subtitle}</p>
        </div>
        <h1 className="font-inter font-semibold text-[36px] mt-6">{title}</h1>
    </div>
  )
}

export default SectionHead