import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { useLanguage } from '../../contexts/LanguageContext'
import { useApi } from '../../contexts/ApiContext'
import { useSession } from '../../contexts/SessionContext'

export const PhoneAutocomplete = (props) => {
  const {
    UIComponent
  } = props

  const [, t] = useLanguage()
  const [ordering] = useApi()
  const [{ token }] = useSession()

  const [phone, setPhone] = useState('')
  const [openModal, setOpenModal] = useState({ customer: false, address: false })
  const [customerState, setCustomerState] = useState({ loading: false, result: { error: false } })
  const [customerPhones, setCustomerPhones] = useState({ phones: [], loading: true, error: null })

  /**
   * filt phones depending of phone input value and getting user data
   */
  const filterPhones = async () => {
    setCustomerState({ loading: true, result: { error: false } })
    try {
      const result = customerPhones.phones.filter(user =>
        user?.phone?.indexOf(phone) > -1
      )
      if (result.length === 1) {
        const { content: { result } } = await ordering
          .setAccessToken(token)
          .users()
          .where([{ attribute: 'cellphone', value: { condition: 'ilike', value: encodeURI(`%${phone}%`) } }])
          .get()
        setCustomerState({ loading: false, result: result[0] })
      } else {
        setCustomerState({ ...customerState, loading: false })
      }
    } catch (e) {
      setCustomerState({ loading: false, result: { error: true, result: e?.message } })
    }
  }

  /**
   * @param {event} e
   * Validate input that only numbers can be inserted
   */
  const onChangeNumber = e => {
    const number = (e.target.validity.valid)
      ? e.target.value : phone
    setPhone(number)
  }

  /**
   * Getting phones
   */
  const getPhone = async () => {
    setCustomerPhones({ ...customerPhones, loading: true })
    try {
      const { content: { result } } = await ordering
        .setAccessToken(token)
        .users()
        .get()
      const newPhones = result.map(user => { return { name: user.name, phone: user.phone || user.cellphone } })
      setCustomerPhones({ ...customerPhones, phones: newPhones, loading: false })
    } catch (e) {
      setCustomerPhones({ ...customerPhones, loading: false, error: e.message })
    }
  }

  /**
   * @param {input} inp
   * @param {array of phones} arr
   * script for autocomplete functionality
   */
  const autocomplete = (inp, arr) => {
    let currentFocus
    inp.addEventListener('input', function (evt) {
      let b
      let i
      const val = this.value
      closeAllLists()
      if (!val) { return false }
      currentFocus = -1
      /* create a DIV element that will contain the items (values): */
      let a = document.createElement('DIV')
      a = document.createElement('DIV')
      a.setAttribute('id', this.id + 'autocomplete-list')
      a.setAttribute('class', 'autocomplete-items')
      /* append the DIV element as a child of the autocomplete container: */
      this.parentNode.appendChild(a)
      /* for each item in the array... */
      for (i = 0; i < arr?.length; i++) {
        /* check if the item starts with the same letters as the text field value: */
        if (arr[i]?.phone?.substr(0, val.length)?.toUpperCase() === val?.toUpperCase()) {
          /* create a DIV element for each matching element: */
          b = document.createElement('DIV')
          /* make the matching letters bold: */
          b.innerHTML = '<strong>' + arr[i]?.phone?.substr(0, val?.length) + '</strong>'
          b.innerHTML += arr[i]?.phone?.substr(val?.length)
          // insert name of the customer
          b.innerHTML += ' (' + arr[i]?.name + ')'
          /* insert a input field that will hold the current array item's value: */
          b.innerHTML += "<input type='hidden' value='" + arr[i]?.phone + "'>"
          /* execute a function when someone clicks on the item value (DIV element): */
          b.addEventListener('click', function (e) {
            /* insert the value for the autocomplete text field: */
            inp.value = this.getElementsByTagName('input')[0].value
            setPhone(this.getElementsByTagName('input')[0].value)
            setOpenModal({ ...openModal, address: true })
            /* close the list of autocompleted values,
                (or any other open lists of autocompleted values: */
            closeAllLists()
          })
          a.appendChild(b)
        }
      }
      /* create a DIV element for add new users */
      b = document.createElement('DIV')
      b.innerHTML = '<strong>' + t('CREATE_CUSTOMER', 'Create new customer') + '</strong>'
      b.innerHTML += "<input type='hidden' value='" + t('CREATE_CUSTOMER', 'Create new customer') + "'>"
      b.addEventListener('click', function (e) {
        if (evt.target.value.length === 10) {
          setOpenModal({ ...openModal, customer: true })
        } else {
          setCustomerPhones({ ...customerPhones, error: t('ERROR_MIN_CHARACTERS_PHONE', 'The Phone / Mobile must be 10 characters') })
        }
        closeAllLists()
      })
      a.appendChild(b)
    })
    /* execute a function presses a key on the keyboard: */
    inp.addEventListener('keydown', function (e) {
      let x = document.getElementById(this.id + 'autocomplete-list')
      if (x) x = x.getElementsByTagName('div')
      if (e.keyCode === 40) {
        /* If the arrow DOWN key is pressed,
          increase the currentFocus variable: */
        currentFocus++
        /* and and make the current item more visible: */
        addActive(x)
      } else if (e.keyCode === 38) { // up
        /* If the arrow UP key is pressed,
          decrease the currentFocus variable: */
        currentFocus--
        /* and and make the current item more visible: */
        addActive(x)
      } else if (e.keyCode === 13) {
        /* If the ENTER key is pressed, prevent the form from being submitted, */
        e.preventDefault()
        if (currentFocus > -1) {
          /* and simulate a click on the "active" item: */
          if (x) x[currentFocus].click()
        }
      }
    })
    function addActive (x) {
      /* a function to classify an item as "active": */
      if (!x) return false
      /* start by removing the "active" class on all items: */
      removeActive(x)
      if (currentFocus >= x.length) currentFocus = 0
      if (currentFocus < 0) currentFocus = (x.length - 1)
      /* add class "autocomplete-active": */
      x[currentFocus].classList.add('autocomplete-active')
    }
    function removeActive (x) {
      /* a function to remove the "active" class from all autocomplete items: */
      for (let i = 0; i < x.length; i++) {
        x[i].classList.remove('autocomplete-active')
      }
    }
    function closeAllLists (elmnt) {
      /* close all autocomplete lists in the document,
      except the one passed as an argument: */
      const x = document.getElementsByClassName('autocomplete-items')
      for (let i = 0; i < x.length; i++) {
        if (elmnt !== x[i] && elmnt !== inp) {
          x[i].parentNode.removeChild(x[i])
        }
      }
    }
    /* execute a function when someone clicks in the document: */
    document.addEventListener('click', function (e) {
      closeAllLists(e.target)
    })
  }

  useEffect(() => {
    autocomplete(document.getElementById('phone-input'), customerPhones.phones)
  }, [customerPhones.phones])

  useEffect(() => {
    getPhone()
  }, [])

  useEffect(() => {
    filterPhones()
  }, [phone])

  return (
    <>
      {UIComponent && (
        <UIComponent
          {...props}
          phone={phone}
          customerState={customerState}
          customerPhones={customerPhones}
          setCustomerPhones={setCustomerPhones}
          setCustomerStat={setCustomerState}
          onChangeNumber={onChangeNumber}
        />
      )}
    </>
  )
}

PhoneAutocomplete.propTypes = {
  /**
   * UI Component, this must be containt all graphic elements and use parent props
   */
  UIComponent: PropTypes.elementType,
  /**
   * Components types before payment option stripe direct
   * Array of type components, the parent props will pass to these components
   */
  beforeComponents: PropTypes.arrayOf(PropTypes.elementType),
  /**
   * Components types after payment option stripe direct
   * Array of type components, the parent props will pass to these components
   */
  afterComponents: PropTypes.arrayOf(PropTypes.elementType),
  /**
   * Elements before payment option stripe direct
   * Array of HTML/Components elements, these components will not get the parent props
   */
  beforeElements: PropTypes.arrayOf(PropTypes.element),
  /**
   * Elements after payment option stripe direct
   * Array of HTML/Components elements, these components will not get the parent props
   */
  afterElements: PropTypes.arrayOf(PropTypes.element)
}

PhoneAutocomplete.defaultProps = {
  beforeComponents: [],
  afterComponents: [],
  beforeElements: [],
  afterElements: []
}
