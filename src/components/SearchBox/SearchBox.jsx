import PropTypes from 'prop-types';
import { Formik } from 'formik';
import { FiSearch } from 'react-icons/fi';
import { ButtonSubmit, FormSearch, Header, Input } from './SearchBox.styled';

export const SearchBox = ({ onSubmit }) => {
  const initialValues = {
    value: '',
  };

  const searchSubmit = (values, { resetForm }) => {
    onSubmit(values);
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
    </>
  );
};
SearchBox.propTypes = {
  onSubmit: PropTypes.func,
};
