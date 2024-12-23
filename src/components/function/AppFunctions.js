import MyBio from '../../assets/pc.png'
import Resume from '../../assets/folder.png'
import Mail from '../../assets/mail.png'
import Project from '../../assets/regFolder.png'
import Winamp from '../../assets/winampIcon.png'
import resumefile from '../../assets/resume.png'
import MineSweeper from '../../assets/minesweepericon.png'
import MSN from '../../assets/msn.png'
import ie from '../../assets/ie.png'
import settings from '../../assets/setting.png'
import file from '../../assets/file4download.png'





// style function for bg tap
export function StyleHide(index, tap, ObjectState) {
  const boxshadowstyleTrue = 'inset 1px 1px #000, 1px 1px #ffffffdd';
  const bgStyleTrue = '#dddcdc';

  const boxshadowstyleFalse = 'inset 1px 1px #ffffffdd, 1.5px 1.5px #000';
  const bgStyleFalse = '#b3b2b2';

  const setState = ObjectState();

  const namePassed = tap[index].split(' ').join('').toLowerCase();

  const foundItem = setState.find(item => {
    const itemName = item.name.split(' ').join('').toLowerCase();

    return itemName === namePassed
  })

  if (foundItem) {
    return foundItem.usestate.focusItem
      ? { boxShadow: boxshadowstyleTrue, background: bgStyleTrue }
      : { boxShadow: boxshadowstyleFalse, background: bgStyleFalse };
  }

  return {};

}


// Mapping image function
export function imageMapping (name) { 
  switch(name) {

    case 'MyBio':
    case 'Mybio':
    case 'My Bio':
      return MyBio;

    case 'Resume':
      return Resume;

    case 'Mail':
      return Mail;

    case 'Project':
      return Project;

      case 'Nft':
      case 'Note':
        return file;
      
    case 'Winamp':
      return Winamp;

    case 'ResumeFile':
      return resumefile;

    case 'MineSweeper':
    case 'Mine Sweeper':
      return MineSweeper;

    case 'MSN':
      return MSN;

    case 'Internet':
      return ie;

    case 'Settings':
      return settings;

    default:
      return null;
  }
}

// click to open links
export function handleDoubleClickiframe(name, setOpenProjectExpand, setProjectUrl) {

  switch(name) {
    case 'Nft': 
      setProjectUrl('https://buzzd-chat-app.onrender.com/'); 
      break;

      case 'Note': 
      setProjectUrl('https://trendigo-ecommerce.vercel.app'); 
      break;

      case 'Type': 
      setProjectUrl('https://yuteoctober.github.io/typingGame/'); 
      break;

    default: break; 
  }
}

export function handleDoubleTapiframeMobile(name, lastTapTime, setLastTapTime, setOpenProjectExpand, setProjectUrl) {
  const now = Date.now();
  if (now - lastTapTime < 300) {
    switch(name) {
      case 'Nft': 
        setProjectUrl('https://buzzd-chat-app.onrender.com/'); 
        break;
  
        case 'Note': 
        setProjectUrl('https://trendigo-ecommerce.vercel.app/'); 
        break;
  
        case 'Type': 
        setProjectUrl('https://yuteoctober.github.io/typingGame/'); 
        break;
  
      default: break; 
    }
  }
  setLastTapTime(now);
  }

export function handleDoubleClickEnterLink(name, setOpenProjectExpand, setProjectUrl) {

  switch(name) {
    case 'Nft': window.open('https://buzzd-chat-app.onrender.com/', '_blank'); break;
    case 'Note': window.open('https://trendigo-ecommerce.vercel.app', '_blank'); break;
    case 'Type': window.open('https://yuteoctober.github.io/typingGame/', '_blank'); break;
    case 'Github': window.open('https://github.com/Naveenmon', '_blank'); break;
    case 'Linked': window.open('https://www.linkedin.com/in/naveenmon/', '_blank'); break;
    default: break; 
  }
}


export function handleDoubleTapEnterMobile(name, lastTapTime, setLastTapTime, setOpenProjectExpand, setProjectUrl) {
const now = Date.now();
if (now - lastTapTime < 300) {
  switch(name) {
    case 'Nft': window.open('https://buzzd-chat-app.onrender.com/', '_blank'); break;
    case 'Note': window.open('https://trendigo-ecommerce.vercel.app', '_blank'); break;
    case 'Type': window.open('https://yuteoctober.github.io/typingGame/', '_blank'); break;
    case 'Github': window.open('https://github.com/Naveenmon', '_blank'); break;
    case 'Linked': window.open('https://www.linkedin.com/in/naveenmon/', '_blank'); break;
    default: break; 
  }
}
setLastTapTime(now);
}

export function iconContainerSize(size) {
  switch(size) {
    case 1:
      return {width: '85px', height: '90px'};
    case 2:
      return {width: '80px', height: '85px'};
    case 3:
      return {width: '75px', height: '80px'};
    case 4:
      return {width: '70px', height: '75px'};
    case 5:
      return {width: '65px', height: '70px'};
    default:
      return {width: '65px', height: '70px'};
  }
}
export function iconImgSize(size) {
  switch(size) {
    case 1:
      return {width: '55px'};
    case 2:
      return {width: '50px'};
    case 3:
      return {width: '45px'};
    case 4:
      return {width: '40px'};
    case 5:
      return {width: '35px'};
    default:
      return {width: '35px'};
  }
}
export function iconTextSize(size) {
  switch(size) {
    case 1:
      return {fontSize: '16px', lineHeight: '13px', number: 1};
    case 2:
      return {fontSize: '15px', lineHeight: '12px', number: 2};
    case 3:
      return {fontSize: '14px', lineHeight: '12px', number: 3};
    case 4:
      return {fontSize: '13px', number: 4};
    case 5:
      return {fontSize: '12px', number: 5};
    default:
      return {fontSize: '12px', number: 5};
  }
}