import React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import { useState } from "react";
import Axios from "axios";


export default function FormDialog(props) {
    const [editValues, setEditValues] = useState({
        id: props.id,
        nome: props.nome,
        email: props.email,
        data: props.data,
        cidade: props.cidade,
        endereco: props.endereco,
        telefone: props.telefone
    });

    const handleEditCadastro = () => {
        Axios.put("http://localhost:3001/edit", {
            id: editValues.id,
            nome: editValues.nome,
            email: editValues.email,
            data: editValues.data,
            cidade: editValues.cidade,
            endereco: editValues.endereco,
            telefone: editValues.telefone
        });
        handleClose();
    };

    /* const handleClickOpen = () => {
         props.setOpen(true)
     };*/

    const handleClose = () => {
        props.setOpen(false);
    };

    const handleChangeValues = value => {
        setEditValues(prevValues => ({
            ...prevValues,
            [value.target.id]: value.target.value,
        }))
    }

    return (
        <Dialog
            open={ props.open }
            onClose={ handleClose }
            aria-labelledby="form-dialog-title"
        >
            <DialogTitle id="form-dialog-title">Editar</DialogTitle>
            <DialogContent>
                <TextField
                    autoFocus
                    margin="dense"
                    id="nome"
                    label="Nome completo"
                    defaultValue={ props.nome }
                    onChange={ handleChangeValues }
                    type="text"
                    fullWidth
                />

                <TextField
                    autoFocus
                    margin="dense"
                    id="email"
                    label="email"
                    defaultValue={ props.email }
                    onChange={ handleChangeValues }
                    type="email"
                    fullWidth
                />

                <TextField
                    autoFocus
                    margin="dense"
                    id="data"
                    label="data de nascimento"
                    defaultValue={ props.data }
                    onChange={ handleChangeValues }
                    type="tele"
                    fullWidth
                />

                <TextField
                    autoFocus
                    margin="dense"
                    id="cidade"
                    label="cidade"
                    defaultValue={ props.cidade }
                    onChange={ handleChangeValues }
                    type="text"
                    fullWidth
                />

                <TextField
                    autoFocus
                    margin="dense"
                    id="endereço"
                    label="endereço"
                    defaultValue={ props.endereco }
                    onChange={ handleChangeValues }
                    type="text"
                    fullWidth
                />

                <TextField
                    autoFocus
                    margin="dense"
                    id="telefone"
                    label="telefone"
                    defaultValue={ props.telefone }
                    onChange={ handleChangeValues }
                    type="tele"
                    fullWidth
                />

                <DialogActions>
                    <Button onClick={ handleClose } color="primary">
                        cancel
                    </Button>

                    <Button onClick={ handleClose } color="primary">
                        Excluir
                    </Button>

                    <Button onClick={ handleEditCadastro } color="primary">
                        Salvar
                    </Button>

                </DialogActions>
            </DialogContent>
        </Dialog>
    );
}

