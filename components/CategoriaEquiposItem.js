// FILE: components/CategoriaEquiposItem.js
import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const CategoriaEquiposItem = ({ categoria, onDelete, onEdit }) => {
  return (
    <View style={styles.itemContainer}>
      <Text style={styles.itemTitle}>{categoria.nombre}</Text>
      <Text style={styles.itemText}>ID: {categoria.categoria_id}</Text>
      <Text style={styles.itemText}>Descripción: {categoria.descripcion}</Text>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.editButton} onPress={() => onEdit(categoria)}>
          <Text style={styles.buttonText}>Editar</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.deleteButton} onPress={() => onDelete(categoria.categoria_id)}>
          <Text style={styles.buttonText}>Eliminar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  itemContainer: { backgroundColor: '#333333', padding: 10, marginVertical: 8, borderRadius: 5 },
  itemTitle: { color: "#ffffff", fontWeight: 'bold' },
  itemText: { color: "#ffffff" },
  buttonContainer: { flexDirection: 'row', justifyContent: 'flex-end', marginTop: 10 },
  editButton: { backgroundColor: '#1e90ff', padding: 5, borderRadius: 5, marginLeft: 10 },
  deleteButton: { backgroundColor: '#ff4444', padding: 5, borderRadius: 5, marginLeft: 10 },
  buttonText: { color: '#ffffff', fontSize: 14 },
});

export default CategoriaEquiposItem;