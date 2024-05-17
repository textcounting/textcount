import { useState } from 'react';
import { Container,Row,Column,Button,Card } from '../Bootstrap';

function MainPage(props:any) {
    const [txt, setText] = useState("");

    const counting = (e:any) => {
        setText(e.target.value);
    };

    const fnReset = () => {
        setText("");
        fnSetValue("");
    };

    const fnSetValue = (str:string):void => {
        let input = document.getElementById("content") as HTMLInputElement;
        if (input !== null && input !== undefined) {
            input.value = str;
            input.focus();
        }
    };

    const fnLiveRemove = () => {
        let tmp = txt;
        if (tmp !== null && tmp !== undefined && tmp !== "") {
            let result = [];
            let arr = tmp.split("\n");
            if (arr !== null && arr !== undefined && arr.length > 0) {
                for(let i = 0; i < arr.length; i++) {
                    if (arr[i] !== null && arr[i] !== undefined && arr[i].trim() !== "") {
                        result.push(arr[i]);
                    }
                }

                tmp = result.join("\n");
                fnSetValue(tmp);
                setText(tmp);
            }
        }
    };

    const fnLiveAdd = () => {
        let tmp = txt;
        if (tmp !== null && tmp !== undefined && tmp !== "") {
            let result = [];
            let arr = tmp.split("\n");
            if (arr !== null && arr !== undefined && arr.length > 0) {
                for(let i = 0; i < arr.length; i++) {
                    result.push(arr[i] + "\n");
                }

                tmp = result.join("\n");
                fnSetValue(tmp);
                setText(tmp);
            }
        }
    };

    const gotoGithub = () => { document.location.href = "https://github.com/textcounting/textcount"; }

    return (
        <Container className="p-3">
        <Row className="p-3 mb-4 bg-light rounded-3">
            <Column size={8}><h3 className="header">TextCount v1.0.1</h3></Column>
            <Column size={4}>
            <Button type="button" id="btnReset" className="btn-success btn-sm w100 right" onClick={fnReset}>Reset</Button>
            </Column>
        </Row>
        <Row className="mb-2">
        <Column size="12">
            <Card>
            <h5 className="card-title">Counting : {txt.length}</h5>
            <textarea name="content" id="content" className="form-control" rows={15} onChange={counting} defaultValue={txt} />
            </Card>
        </Column>
        </Row>
        <Row>
        <Column size="12">
            <Card>
            <Button type="button" id="btnLiveRemove" className="btn-primary btn-sm mr-3" onClick={fnLiveRemove}>줄간격제거</Button>
            <Button type="button" id="btnLiveAdd" className="btn-warning btn-sm" onClick={fnLiveAdd}>1줄간격주기</Button>
            <code className="right hand" onClick={gotoGithub}>https://github.com/parkheesung/textcount</code>
            </Card>
        </Column>
        </Row> 
        </Container>
    );
};

export default MainPage;