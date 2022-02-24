import { EmojiHappyIcon, PhotographIcon, XIcon } from '@heroicons/react/outline'
import { useRef, useState } from 'react'
import { Picker } from 'emoji-mart'
import 'emoji-mart/css/emoji-mart.css'

function Input() {
  const [input, setInput] = useState('')
  const [loading, setLoading] = useState(false)
  const [selectedFile, setSelectedFile] = useState(null)
  const filePickerRef = useRef(null)
  const [showEmojis, setShowEmojis] = useState(false)

  const addImageToPost = (e) => {
    const reader = new FileReader()
    if (e.target.files[0]) {
      reader.readAsDataURL(e.target.files[0])
    }

    reader.onload = (readerEvent) => {
      setSelectedFile(readerEvent.target.result)
    }
  }

  const sendPost = async () => {
    if (loading) return
    setLoading(true)
    setLoading(false)
    setInput('')
    setSelectedFile(null)
    setShowEmojis(false)
  }

  const addEmoji = (e) => {
    let sym = e.unified.split('-')
    let codesArray = []
    sym.forEach((el) => codesArray.push('0x' + el))
    let emoji = String.fromCodePoint(...codesArray)
    setInput(input + emoji)
  }

  return (
    <div
      onSubmit={handleSubmit(onSubmit)}
      className={`border-b border-gray-700 p-3 flex space-x-3 scrollbar-hide ${
        loading && 'opacity-60'
      }`}
    >
      <div className="divide-y divide-gray-700 w-full">
        <div className={`${selectedFile && 'pb-7'} ${input && 'space-y-2.5'}`}>
          <textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Faites le savoir..."
            rows="2"
            className="bg-transparent outline-none text-lg placeholder-gray-500 tracking-wide w-full min-h-[50px]"
          />

          {selectedFile && (
            <div className="relative">
              <div
                className="absolute w-8 h-8 bg-[#15181c] hover:bg-[#272c26] bg-opacity-75 rounded-full flex items-center justify-center top-1 left-1 cursor-pointer"
                onClick={() => setSelectedFile(null)}
              >
                <XIcon className="text-white h-5" />
              </div>
              <img
                src={selectedFile}
                alt=""
                className="rounded-2xl max-h-80 object-contain"
              />
            </div>
          )}
        </div>
        {!loading && (
          <div className="flex items-center justify-between pt-2.5">
            <div className="flex items-center">
              <div
                className="icon hover:text-[#1d9bf0] "
                onClick={() => filePickerRef.current.click()}
              >
                <PhotographIcon className="cursor-pointer h-[22px]" />
                <input
                  type="file"
                  ref={filePickerRef}
                  hidden
                  onChange={addImageToPost}
                />
              </div>

              <div
                className="icon hover:text-[#1d9bf0] "
                onClick={() => setShowEmojis(!showEmojis)}
              >
                <EmojiHappyIcon className="cursor-pointer h-[22px]" />
              </div>

              {showEmojis && (
                <Picker
                  onSelect={addEmoji}
                  style={{
                    position: 'absolute',
                    marginTop: '465px',
                    marginLeft: -40,
                    maxWidth: '320px',
                    borderRadius: '20px',
                  }}
                  theme="dark"
                />
              )}
            </div>
            <button
              className="bg-gray-900 text-white rounded-full px-4 py-1.5 font-bold shadow-md hover:bg-[#1a8cd8] disabled:hover:bg-blue-400 disabled:opacity-50 disabled:cursor-not-allowed"
              disabled={!input.trim() && !selectedFile}
              onClick={sendPost}
            >
              Poster
            </button>
          </div>
        )}
      </div>
    </div>
  )
}

export default Input
