import React from 'react'

const AddMedicalCardRecordPage = () => {
  return (
    <div>
      <h4>Додати запис до медичної карти паціента Lysenko Daniil Oleksandrovich</h4>
      <form>
        <div className="form-group">
          <label htmlFor="result">Діагноз</label>
          <input type="text" className="form-control" id="result" placeholder="Діагноз" />
        </div>
        <div className="form-group">
          <label htmlFor="help">Рекомендації до лікування</label>
          <input type="text" className="form-control" id="help" placeholder="Рекомендації до лікування" />
        </div>
        <div className="form-group">
          <label htmlFor="analyze">Направлення на аналізи</label>
          <input type="text" className="form-control" id="analyze" placeholder="Направлення на аналізи" />
        </div>
        <button type="submit" className="btn btn-primary">Зберегти</button>
      </form>
    </div>
  )
}

export default AddMedicalCardRecordPage