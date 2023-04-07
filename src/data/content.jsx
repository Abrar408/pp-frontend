import React from 'react'

const contentIntro = () => {
  return (
    <>
        <div style={{padding:'0px 10px'}}>
        <div style={{fontSize:'24px'}}>
            Welcome to Jira
        </div>
        <div style={{display:'flex'}}>
            <img src='../../welcome.jpg' style={{width:'180px'}}></img>
            <div style={{fontSize:'14px',lineHeight:'20px'}}>
                <p>Not sure where to start? Check out the Jira 101 guide and Atlassian training course.</p>
                <p>You can customize this text in the Administration section.</p>
            </div>
        </div>
        </div>
    </>
  )
}

const contentProject = () => {
    return (
      <>
        <div style={{padding:'0px 10px',fontSize:'14px',lineHeight:'20px'}}>
          <p>No projects exist (yet). Be the first to create a project.</p>
        </div>
      </>
    )
  }

  const contentIssue = () => {
    return (
      <>
        <div style={{padding:'0px 10px',fontSize:'14px',lineHeight:'20px'}}>
          <p>You currently have no issues assigned to you. Enjoy your day!</p>
        </div>
      </>
    )
  }

  const contentActivity = () => {
    return (
        <>
        <div style={{padding:'0px 10px'}}>
            <div style={{fontSize:'24px',borderBottom:'1px solid lightgray'}}>
                Your Company JIRA
            </div>
            <div style={{padding:'0px 10px',fontSize:'14px',lineHeight:'20px'}}>
                <p>No activity was found</p>    
            </div>            
        </div>
        </>
    )
  }

export { contentIntro,contentProject,contentIssue,contentActivity }