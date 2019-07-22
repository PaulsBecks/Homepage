/* eslint-disable */
export default function(...functions) {
    async function execute(){ 
        let result;
        while(functions.length){
            result = await functions.shift()(result);
        }
    }

    execute();
}