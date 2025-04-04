import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { getUsers, getLaboratories, getEquipment, getMaintenaint, getLoans, getLabReservations, getEquipmentCategories } from '../api';
import Layout from '../components/layout';
import UserList from '../components/UserList';
import LaboratoryList from '../components/LaboratoryList';
import EquipmentList from '../components/EquipmentList';

const HomeScreen = () => {
  const [users, setUsers] = useState([]);
  const [laboratories, setLaboratories] = useState([]);
  const [equipment, setEquipment] = useState([]);
  const [mantenimiento, setMainten] = useState([]);
  const [prestamo, setPrestamos] = useState([]);
  const [reserva, setReservas] = useState([]);
  const [categoria, setCategorias] = useState([]);
  const navigation = useNavigation();

  const loadData = async () => {
    try {
      const userData = await getUsers();
      const labData = await getLaboratories();
      const equipData = await getEquipment();
      const maintenData = await getMaintenaint();
      const loansData = await getLoans();
      const reservasData = await getLabReservations();
      const categoriasData = await getEquipmentCategories();
      setUsers(userData);
      setLaboratories(labData);
      setEquipment(equipData);
      setMainten(maintenData);
      setPrestamos(loansData);
      setReservas(reservasData);
      setCategorias(categoriasData);
    } catch (error) {
      console.error('Error en loadData:', error);
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  return (
    <Layout>

      <Text style={styles.title}>Bienvenido</Text>

      <TouchableOpacity 
        style={styles.button} 
        onPress={() => navigation.navigate('Usuarios')}
      >
        <Text style={styles.buttonText}>Gestionar Usuarios</Text>
      </TouchableOpacity>

      <TouchableOpacity 
        style={styles.button} 
        onPress={() => navigation.navigate('Laboratorios')}
      >
        <Text style={styles.buttonText}>Gestionar Laboratorios</Text>
      </TouchableOpacity>

      <TouchableOpacity 
        style={styles.button} 
        onPress={() => navigation.navigate('Equipos')}
      >
        <Text style={styles.buttonText}>Gestionar Equipos</Text>
      </TouchableOpacity>

      <TouchableOpacity 
        style={styles.button} 
        onPress={() => navigation.navigate('Mantenimiento')}
      >
        <Text style={styles.buttonText}>Gestionar Mantenimiento</Text>
      </TouchableOpacity>
  
     <TouchableOpacity 
          style={styles.button} 
          onPress={() => navigation.navigate('Prestamos')}
        >
          <Text style={styles.buttonText}>Gestionar Préstamos</Text>
        </TouchableOpacity>
       
     
        <TouchableOpacity 
          style={styles.button} 
          onPress={() => navigation.navigate('ReservasLaboratorio')}
        >
          <Text style={styles.buttonText}>Gestionar Reservas de Laboratorio</Text>
        </TouchableOpacity>
        

       
        <TouchableOpacity 
          style={styles.button} 
          onPress={() => navigation.navigate('CategoriaEquipos')}
        >
          <Text style={styles.buttonText}>Gestionar Categoría de Equipos</Text>
        </TouchableOpacity>
        
    </Layout>
  );
};

const styles = StyleSheet.create({
  title: {
    color: '#ffffff',
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#1e90ff',
    padding: 15,
    borderRadius: 8,
    marginVertical: 10,
    width: '80%',
    alignItems: 'center',
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  sectionTitle: {
    color: '#ffffff',
    fontSize: 20,
    marginTop: 20,
    marginBottom: 10,
  },
});

export default HomeScreen;