import { AppContext } from '../App';
import React, { useContext } from 'react';

function FileForm() {
  const { latestPost, setLatestPost } = useContext(AppContext);
  
  function handleSubmit(event) {

  }

  function submitToAPI(data) {

  }
  return (
    <div>
      <h1>File Form</h1>
      <form onSubmit={(e) => handleSubmit()}>
        <label htmlFor="title">Title</label>
      </form>

    </div>
  )
}

export default FileForm;