import { gql } from 'apollo-angular';

export const GET_DEPARTAMENTOS = gql`
    query {
      departamentos {
        id,
        nombre
      }
    }
`;

export const GET_PROVINCIAS = gql`
    query {
      provincias {
        id,
        nombre
      }
    }
`;

export const GET_DISTRITOS = gql`
    query {
      distritos {
        id,
        nombre
      }
    }
`;

/**
 * #### Obtener Provicias por Departamento
 * Tienes que pasarle una variable `idDep: ID` para que puedas recuperar las provincias.
 * Lo que te devuelve es un objeto.
 */
export const GET_PROVINCIAS_X_DEPARTAMENTO = gql`
    query departamento($idDep: ID!) {
      provincias(where: { departamento: [$idDep] }) {
        id,
        nombre
      }
    }
`;

/**
 * #### Obtener Distritos por Provincias
 * Tienes que pasarle una variable `idPro: ID` para que puedas recuperar los Distritos.
 * Lo que te devuelve es un objeto.
 */
export const GET_DISTRITOS_X_PROVINCIA = gql`
    query provincia($idPro: ID!) {
      distritos(where: { provincia: [$idPro] }) {
        id,
        nombre
      }
    }
`;
