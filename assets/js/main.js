{
    const shareBtnContainer = document.querySelector('div.share-post');
    const shareBtn = shareBtnContainer.children[2];
    const shareBtnFeedback = shareBtnContainer.children[3];
    
    const copyPostLink = ()=>{
        const link = shareBtnContainer.children[1]; //input element containing post link
        
        const feedbackMsg = (str = '')=>{ //set feedbackMsg
            shareBtnFeedback.textContent = str;
            return str;
        }        

        if( !document.queryCommandSupported('copy') ){ //fallback support
            link.classList.remove('visually-hidden');
            link.select();
            feedbackMsg('Copy link to share');
        } else { //copy to clipboard
            link.select();
            document.execCommand('copy');
            feedbackMsg('link copied to clipboard');
        }
        
        window.setTimeout(()=>{ //clear feedbackMsg after 5s
            feedbackMsg();
        }, 5000)
    }
    
    shareBtn.addEventListener('click', copyPostLink);
    
}