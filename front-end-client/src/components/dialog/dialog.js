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
        endereço: props.endereço,
        telefone: props.telefone,
    });

    const handleEditCrud = () => {
        Axios.put("http://localhost:3001/edit", {
            id: editValues.id,
            nome: editValues.nome,
            email: editValues.email,
            data: editValues.data,
            cidade: editValues.cidade,
            endereço: editValues.endereço,
            telefone: editValues.telefone,
        });
        handleClose();
    };

    const handleDelete = () => {
        Axios.delete(`http://localhost:3001/delete/${editValues.id}`);
        handleClose();
    };

    const handleClose = () => {
        props.setOpen(false);
    };

    const handleChangeValues = (value) => {
        setEditValues((prevValues) => ({
            ...prevValues,
            [value.target.id]: value.target.value,
        }));
    };

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
                    onChange={ handleChangeValues }
                    defaultValue={ props.nome }
                    type="text"
                    fullWidth
                />

                <TextField
                    autoFocus
                    margin="dense"
                    id="email"
                    label="email"
                    onChange={ handleChangeValues }
                    defaultValue={ props.email }
                    type="email"
                    fullWidth
                />

                <TextField
                    autoFocus
                    margin="dense"
                    id="data"
                    label="data de nascimento"
                    onChange={ handleChangeValues }
                    defaultValue={ props.data }
                    type="tele"
                    fullWidth
                />

                <TextField
                    autoFocus
                    margin="dense"
                    id="cidade"
                    label="cidade"
                    onChange={ handleChangeValues }
                    defaultValue={ props.cidade }
                    type="text"
                    fullWidth
                />

                <TextField
                    autoFocus
                    margin="dense"
                    id="endereço"
                    label="endereço"
                    onChange={ handleChangeValues }
                    defaultValue={ props.endereço }
                    type="text"
                    fullWidth
                />

                <TextField
                    autoFocus
                    margin="dense"
                    id="telefone"
                    label="telefone"
                    onChange={ handleChangeValues }
                    defaultValue={ props.telefone }
                    type="tele"
                    fullWidth
                />

                <DialogActions>
                    <Button onClick={ handleClose } color="primary">
                        cancel
                    </Button>

                    <Button onClick={ handleDelete } color="primary">
                        Excluir
                    </Button>

                    <Button onClick={ handleEditCrud } color="primary">
                        Salvar
                    </Button>

                </DialogActions>
            </DialogContent>
        </Dialog>
    );
}

