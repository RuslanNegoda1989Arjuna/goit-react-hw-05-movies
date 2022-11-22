// import PropTypes from 'prop-types';
// import { Formik } from 'formik';
// import { ButtonSubmit, FormSearch, Header, Input } from './Searchbar.styled';
// import { FiSearch } from 'react-icons/fi';
// import { ButtonSubmit, FormSearch, Header, Input } from './Movies.styled';
// import { Outlet } from 'react-router-dom';

export const Movies = () => {
  console.log('Search will be here');
  return (
    <div>
      <h1>search movie</h1>
      <input type="text" />
      <button>Submite</button>
    </div>
  );

  // const modalRoot = document.querySelector('modal-root');

  // const initialValues = {
  //   value: '',
  // };
  // const Searchbar = () => {
  //   const searchSubmit = (values, { resetForm }) => {
  //     console.log(values);
  //     // onSubmit(values);
  //     resetForm();
  //   };
  //   return (
  //     <>
  //       <Formik initialValues={initialValues} onSubmit={searchSubmit}>
  //         <Header>
  //           <FormSearch>
  //             <ButtonSubmit type="submit">
  //               <span>
  //                 <FiSearch size={20} />
  //               </span>
  //             </ButtonSubmit>

  //             <Input
  //               type="text"
  //               name="value"
  //               autoComplete="off"
  //               autoFocus
  //               placeholder="Search images and photos"
  //             />
  //           </FormSearch>
  //         </Header>
  //       </Formik>
  //       <Outlet />
  //     </>
  //   );
  // };

  // Searchbar.propTypes = {
  //   onSubmit: PropTypes.func,
  // };
};
