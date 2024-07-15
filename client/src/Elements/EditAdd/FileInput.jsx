export default function FileInput ({ value, onChange, index }) {
    function handleFileChange(e) {
      const file = e.target.files[0];
      onChange(index, file);
    };
  
    function handleImageClick() {
      document.querySelector(`input[type="file"][data-index="${index}"]`).click();
    };
  
    return (
      <div className="flex items-center justify-center w-full">
        <input
          type="file"
          className={`border rounded px-2 py-1 flex-1 h-12 ${value ? 'hidden' : ''}`}
          onChange={handleFileChange}
          data-index={index}
        />
        {value && (
          <div
            className="flex-1 h-96 flex items-center justify-center w-full cursor-pointer"
            onClick={handleImageClick}
          >
            <img
              src={value ? URL.createObjectURL(value) : ''}
              alt="Uploaded"
              className="max-w-full h-full object-contain"
            />
          </div>
        )}
      </div>
    );
  };