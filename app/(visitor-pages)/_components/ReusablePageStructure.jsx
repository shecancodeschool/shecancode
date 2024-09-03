const ReusablePageStructure = ({children}) => {
    return (
        <div className="flex flex-col items-start justify-start w-full">
            {children}
        </div>
    )
}

export default ReusablePageStructure