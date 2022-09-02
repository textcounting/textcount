import React, { useState, useEffect } from 'react';
import { Container,Row,Column,Button,Card,TextArea } from '../Bootstrap';

function MainPage(props:any) {
    const [txt, setText] = useState("");

    const counting = (e:any) => {
        setText(e.target.value);
    };

    const fnReset = () => {
        setText("");
        let input = document.getElementById("content") as HTMLInputElement;
        if (input !== null && input !== undefined) {
            input.value = "";
            input.focus();
        }
    };

    return (
        <Container className="p-3">
        <Row className="p-3 mb-4 bg-light rounded-3">
            <Column size={8}><h3 className="header">TextCount</h3></Column>
            <Column size={4}>
            <Button type="button" id="btnReset" className="btn-success btn-sm w100 right" onClick={fnReset}>Reset</Button>
            </Column>
        </Row>
        <Row className="mb-2">
        <Column size="12">
            <Card>
            <h5 className="card-title">Counting : {txt.length}</h5>
            <textarea name="content" id="content" className="form-control" rows={12} onChange={counting} defaultValue={txt} />
            </Card>
        </Column>
        </Row>
        <Row>
        <Column size="12">
            <Card>

            </Card>
        </Column>
        </Row>
        </Container>
    );
};

export default MainPage;