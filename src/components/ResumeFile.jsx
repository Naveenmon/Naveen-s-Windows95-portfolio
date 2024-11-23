import UseContext from '../Context'
import { useContext, useState } from "react";
import Draggable from 'react-draggable'
import { motion } from 'framer-motion';
import resumefile from '../assets/resume.png'
import download from '../assets/file4download.png'
import ie from '../assets/ie.png'
import file from '../assets/folderopen.png'
import '../css/ResumeFile.css'



function ResumeFile() {

  const { 
    themeDragBar,
    ResumeFileExpand, setResumeFileExpand,
    lastTapTime, setLastTapTime,
    StyleHide,
    isTouchDevice,
    handleSetFocusItemTrue,
    inlineStyleExpand,
    inlineStyle,
    deleteTap,

   } = useContext(UseContext);

   const [ downloadBox, setDownloadBox ] = useState(false)

      function handleDragStop(event, data) {
        const positionX = data.x 
        const positionY = data.y
        setResumeFileExpand(prev => ({
          ...prev,
          x: positionX,
          y: positionY
        }))

      }

   function handleExpandStateToggle() {
    setResumeFileExpand(prevState => ({
      ...prevState,
      expand: !prevState.expand
    }));
  }

  function handleExpandStateToggleMobile() {
    const now = Date.now();
    if (now - lastTapTime < 300) {
        setResumeFileExpand(prevState => ({
            ...prevState,
            expand: !prevState.expand
        }));
    }
    setLastTapTime(now);
}

  return (
    <>
      <Draggable
        axis="both" 
        handle={'.folder_dragbar-resumefile'}
        grid={[1, 1]}
        scale={1}
        disabled={ResumeFileExpand.expand}
        bounds={{top: 0}}
        defaultPosition={{ 
          x: window.innerWidth <= 500 ? 5 : 80,
          y: window.innerWidth <= 500 ? 100 : 90,
        }}
        onStop={(event, data) => handleDragStop(event, data)}
        onStart={() => handleSetFocusItemTrue('ResumeFile')}
      >
        <div className='folder_folder-resumefile' 
            onClick={(e) => {
              e.stopPropagation();
              handleSetFocusItemTrue('ResumeFile');
            }}
            style={ ResumeFileExpand.expand ? inlineStyleExpand('ResumeFile') : inlineStyle('ResumeFile')}>
          <div className="folder_dragbar-resumefile"
              onDoubleClick={handleExpandStateToggle}
              onTouchStart={handleExpandStateToggleMobile}
             style={{ background: ResumeFileExpand.focusItem? themeDragBar : '#757579'}}
          >
            <div className="folder_barname-resumefile">
              <img src={resumefile} alt="resumefile" />
              <span>Resume</span>
            </div>
            <div className="folder_barbtn-resumefile">
              <div onClick={ !isTouchDevice? (e) => {
                e.stopPropagation()
                setResumeFileExpand(prev => ({...prev, hide: true, focusItem: false}))
                StyleHide('ResumeFile') 
              } : undefined
            }
                   onTouchEnd={(e) => {
                    e.stopPropagation()
                    setResumeFileExpand(prev => ({...prev, hide: true, focusItem: false}))
                    StyleHide('ResumeFile')
                  }}
              >
                <p className='dash-resumefile'></p>
              </div>
              <div
                onClick={ !isTouchDevice ? () => handleExpandStateToggle() : undefined}
                onTouchEnd={handleExpandStateToggle}
              >
                <motion.div className={`expand-resumefile ${ResumeFileExpand.expand ? 'full' : ''}`}>
                </motion.div>
                {ResumeFileExpand.expand ? 
                (
                <div className="expand_2-resumefile"></div>
                )
                :
                (null)}
              </div>
              <div>
                <p className='x-resumefile'
                 onClick={!isTouchDevice ? () => {
                  deleteTap('ResumeFile')
                  setDownloadBox(false)
                 }: undefined
                }
                onTouchEnd={() => {
                  deleteTap('ResumeFile')
                  setDownloadBox(false)
              }}
                >×</p>
              </div>
            </div>
          </div>

          <div className="btn_option_btm_container"
            onClick={() => setDownloadBox(false)}
          > 
            <div className="download_icon"
              style={ downloadBox? {
                background: '#ecebeb', 
                borderBottomColor:'white',
                borderRightColor:'white',
                borderTopColor:'black',
                borderLeftColor:'black'
              }:{}}
              onClick={(e) => {
                e.stopPropagation()
                setDownloadBox(!downloadBox)
              }}
            >
              <img src={file} alt="file" />
              <span>Resume File</span>
            </div>
            <div className={`file_resume_select ${downloadBox ? 'file_resume_select-show' : 'file_resume_select-hide'}`}>
              <div className="btn_download_conainer"
                  onClick={() => {
                    window.open('https://drive.google.com/file/d/1E4owVhRjORS7B136yFOPSsAgJlRzDqRC/view?usp=sharing', '_blank')
                    setDownloadBox(false)
                  }}
                >
                  <img src={download} alt="download" />
                  <p>Download File</p>
                </div>
                <div className="btn_Open_conainer"
                  onClick={() => {
                    window.open('https://drive.google.com/file/d/1E4owVhRjORS7B136yFOPSsAgJlRzDqRC/view', '_blank')
                    setDownloadBox(false)
                  }}
                >
                <img src={ie} alt="ie" />
                  <p>Open new window</p>
                </div>
              </div> 
          </div>

          <div className="folder_content-resumefile"
            style={ResumeFileExpand.expand ? 
              { height: 'calc(100svh - 110px)'} /// fullscreen btm nav
              : 
              {}
            }

          >
            {ResumeFileExpand.show ? (
              <iframe 
              onClick={() => setDownloadBox(false)}
              src="https://drive.google.com/file/d/1E4owVhRjORS7B136yFOPSsAgJlRzDqRC/preview" 
              frameBorder='0'
            >
            </iframe>
            ):(null)}
            
          </div>
        </div>
      </Draggable>
    </>
  )
}          


export default ResumeFile