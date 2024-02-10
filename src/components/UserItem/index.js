import './index.css'

const UserItem = props => {
  const {contactDetails} = props
  const {name, mobileNo, nickname, age, gender, email} = contactDetails

  return (
    <li className="table-row">
      <div className="table-cell name-column">
        <p>{name}</p>
      </div>
      <hr className="separator" />
      <div className="table-cell name-column">
        <p>{nickname}</p>
      </div>
      <hr className="separator" />
      <div className="table-cell name-column">
        <p>{age}</p>
      </div>
      <hr className="separator" />
      <div className="table-cell name-column">
        <p>{gender}</p>
      </div>
      <hr className="separator" />
      <div className="table-cell name-column">
        <p className="mobile-no-value">{mobileNo}</p>
      </div>
      <hr className="separator" />
      <div className="table-cell name-column">
        <p className="mobile-no-value">{email}</p>
      </div>
      <hr className="separator" />
    </li>
  )
}

export default UserItem
