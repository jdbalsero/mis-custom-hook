import { useEffect, useRef, useState } from "react"

export const useFetch = (url) => {
  
    const [state, setState] = useState({data: null, loading: true, error: null});
    //Mantiene la referencia mientras el componente este montado
    const isMounted = useRef(true);

    useEffect(() => {
      return () => {
          isMounted.current = false;
      }
    }, [])

    useEffect(() => {

        setState({data: null, loading: true, error: null});
        
      fetch(url).then(resp => resp.json()).then(data => {
            //Si el componente no esta montado no pone el setState y por lo tanto se ahorra un error
            if(isMounted.current){
                setState({
                    loading: false,
                    error: null,
                    data
                });
            }
      }).catch(() => {
          //En caso de error
          setState({
            loading: false,
            error: 'No se pudo cargar la info',
            data: null,
        });
      });
    }, [url])

    return state;
    
}
