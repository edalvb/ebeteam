import { gql } from 'apollo-angular';

/**
 * #### Obtener Centros de Atención por Distrito y EO
 * Tienes que pasarle dos variables `idEO: ID` _(id de la EO)_ e `idDis: ID` _(id del distrito)_
 * para que puedas recuperar los Centros de Atención. Lo que te devuelve es un objeto.
 */
export const GET_CENTROS_ATENCION_X_DISTRITO = gql`
    query distritoEO($idEO: ID!, $idDis: ID!) {
      centroAtencions(where: { enre: [$idEO], distrito: [$idDis] }) {
        nombre
        direccion
        horario
        ubicacion_latitud
        ubicacion_longitud
      }
    }
`;

/**
 * Obtienes todas las entidades de referencia
 */
export const GET_EOS = gql`
    query {
      entidadReferencias {
        id,
        nombre
      }
    }
`;
