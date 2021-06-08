import React from 'react';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import TextField from '@material-ui/core/TextField';
import { Divider, Grid } from '@material-ui/core';

import { useFormik } from 'formik';
import { useModal } from '../context/controllerModal';

const useStyles = makeStyles(() => createStyles({
  root: {
    flexGrow: 1,
  },
  divider: {
    marginTop: 10,
    marginBottom: 10,
  },
}));

const defaultFormShape = {
  userName: '',
};

const Modal = (props) => {
  const classes = useStyles();
  const { saveEdit, nameToEdit } = props;
  
  const { open, openModal } = useModal();

  console.log("Nome para editar: " + nameToEdit.name);

  const formik = useFormik({
    initialValues: nameToEdit || defaultFormShape,
    onSubmit: (values, { resetForm }) => {
      if(nameToEdit){
        console.log('cadastro editado', values);
      }else{
        console.log('cadastro novo', values);
      }
      resetForm({});
    },
  });

  return (
    <>
      <Dialog open={open} aria-labelledby="max-width-dialog-title">
        <form className={classes.root} noValidate onSubmit={formik.handleSubmit}>
          <DialogTitle id="max-width-dialog-title">Nome que deveria aparecer abaixo: {nameToEdit.name}</DialogTitle>
          <DialogContent>
            <Grid container spacing={1}>
              <Grid item xs={6}>
                <TextField
                  autoFocus
                  margin="dense"
                  variant="outlined"
                  id="userName"
                  label="Nome"
                  fullWidth
                  onChange={formik.handleChange}
                  value={formik.values.nameToEdit? formik.values.nameToEdit.name : ''}
                />
              </Grid>
            </Grid>
            <Divider className={classes.divider} />
          </DialogContent>
          <DialogActions>
            <Button onClick={() => openModal()} color="primary" variant="outlined">
              Cancelar
            </Button>
            <Button
              color="primary"
              variant="contained"
              type="submit"
            >
              Salvar
            </Button>
          </DialogActions>
        </form>
      </Dialog>
    </>
  );
};

export default Modal;