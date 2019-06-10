import React from 'react'

const AddMedicalCardAnalyzePage = () => {
  return (
    <div>
      <h4>Додати запис до медичної карти паціента Lysenko Daniil Oleksandrovich</h4>
      <form>
        <div className="form-group">
          <label htmlFor="type">Тип аналізів</label>
          <input type="text" className="form-control" id="type" placeholder="Тип аналізів" />
        </div>
        <div className="form-group">
          <label htmlFor="file">Додати файл з результатами</label>
          <input type="file" className="form-control-file" id="file" />
        </div>
        <button type="submit" className="btn btn-success">Зберегти</button>
      </form>
    </div>
  )
}

export default AddMedicalCardAnalyzePage