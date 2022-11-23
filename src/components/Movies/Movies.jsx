import PropTypes from 'prop-types';
import { Formik } from 'formik';
import { FiSearch } from 'react-icons/fi';
import { ButtonSubmit, FormSearch, Header, Input } from './Movies.styled';
import { Outlet } from 'react-router-dom';

export const Movies = () => {
  console.log('Search will be here');

  // const modalRoot = document.querySelector('modal-root');

  const initialValues = {
    value: '',
  };

  const searchSubmit = (values, { resetForm }) => {
    console.log(values.value);
    // onSubmit(values);
    resetForm();
  };
  return (
    <>
      <Formik initialValues={initialValues} onSubmit={searchSubmit}>
        <Header>
          <FormSearch>
            <ButtonSubmit type="submit">
              <span>
                <FiSearch size={20} />
              </span>
            </ButtonSubmit>

            <Input
              type="text"
              name="value"
              autoComplete="off"
              autoFocus
              placeholder="Search films"
            />
          </FormSearch>
        </Header>
      </Formik>
      <Outlet />
    </>
  );
};
Movies.propTypes = {
  onSubmit: PropTypes.func,
};
