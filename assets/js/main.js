{
    const snackbar = document.getElementById('snackbar');
    const snackbarLabel = snackbar.children[0];

    /**
     * 
     * @param {html element} container where to put the feedback msg
     * @param {String} str the feedback message
     * @param {bool} priority 0=polite, 1=alert
     * @return String
     */
    const setFeedbackMsg = (container, str = '', priority = 0)=>{ //set feedbackMsg
        if(str.length > 0){
            snackbar.classList.remove('visually-hidden');
        }else{
            snackbar.classList.add('visually-hidden');            
        }
        container.textContent = str;
        return str;
    };
    
    // const setAlertMsg = (container, str = '', priority = '0')=>{ //set feedbackMsg
    //     container.textContent = str;
    //     return str;
    // }
    
    const formatShareBtn = ()=>{
        const shareBtnContainer = document.querySelector('div.share-post'); //use querySelectorAll to have multiple share btns
        const shareBtn = shareBtnContainer.children[2];
        
        const copyPostLink = ()=>{
            const link = shareBtnContainer.children[1]; //input element containing post link
                                
            if( !document.queryCommandSupported('copy') ){ //fallback support
                link.classList.remove('visually-hidden');
                link.select();
                setFeedbackMsg(snackbarLabel, 'Copy link to share');
            } else { //copy to clipboard
                link.select();
                document.execCommand('copy');
                setFeedbackMsg(snackbarLabel, 'link copied to clipboard');
            }
            
            window.setTimeout(()=>{ //clear feedbackMsg after 5s
                setFeedbackMsg(snackbarLabel);
            }, 4000);
        };
        
        // shareBtn.addEventListener('click', copyPostLink);
        shareBtn.addEventListener('touchup', copyPostLink);
        shareBtn.addEventListener('mouseup', copyPostLink);
    };

    // ------------------------------
    // ------------------------------
    // ------------------------------

    document.querySelector('div.share-post') && formatShareBtn();

    const sections = document.querySelectorAll('section');
    for(const section of sections){
        section.setAttribute('aria-label', section.children[0].textContent);
    }

    // ------------------------------
    // ------------------------------
    // ------------------------------
    
}