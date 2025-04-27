export const UploadForm = () => {
  return (
    <div className="mt-10">
        <form className="flex flex-col items-center gap-8">
        <input type="file" 
        className="file-input file-input-ghost" />
        <button>Upload</button>
        </form>
    </div>
  )
}
