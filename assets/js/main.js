{
    const shareBtnContainer = document.querySelector('div.share-post');
    const shareBtn = shareBtnContainer.children[2];
    const shareBtnFeedback = shareBtnContainer.children[3];
    
    const copyPostLink = ()=>{
        const link = shareBtnContainer.children[1];
        link.select()
        document.execCommand('copy');
        let feedbackMsg = 'link copied to clipboard'
        shareBtnFeedback.innerHTML = feedbackMsg;
    }
    
    shareBtn.addEventListener('click', copyPostLink);
    
}