import React from 'react'

const FeedbackPage = () => {
  return (
    <div>
      <h4>Залиште відгук на лікаря, який вас приймав (анонімно)</h4>
      <form>
        <div className="form-group">
          <label htmlFor="type">Ім'я лікаря</label>
          <input type="text" className="form-control" id="type" placeholder="Ім'я лікаря" />
        </div>
        <div className="form-group">
          <label htmlFor="type">Відгук</label>
          <textarea className="form-control" id="type" placeholder="Відгук" />
        </div>
        <button type="submit" className="btn btn-success">Зберегти</button>
      </form>
    </div>
  )
}

export default FeedbackPage