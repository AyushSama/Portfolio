import React, { useContext } from 'react'
import AlertContext from '../Context/Alerts/AlertContext';

export default function Alert() {

  const a = useContext(AlertContext);

  const capitalizeFirstLetter = (word) => {
    if (word.length === 0) {
      return word;
    }
    return word.charAt(0).toUpperCase() + word.slice(1);
  }

  return (
    a.alert.type && <div>
      <div className={`alert alert-${a.alert.type} alert-dismissible fade show`} role="alert">
        <strong>{capitalizeFirstLetter(a.alert.type)} :</strong> {a.alert.message}
      </div>
    </div>
  )
}
