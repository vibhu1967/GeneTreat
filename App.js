import * as React from 'react';
import {useState} from 'react';
import { StyleSheet, Text, TextInput, View, Navigator,AppRegistry,StatusBar,
          Image, Alert, Button, CheckBox, Picker, TouchableOpacity,FlatList,ScrollView} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, HeaderTitle } from '@react-navigation/stack';
import { AsyncStorage } from 'react-native';


function loginsc({ navigation }) {
  
  return (
  <View style={styles.container}>
      <StatusBar barStyle = "light-content" hidden = {false} backgroundColor = "#093874" translucent={true} />
      <View style={styles.SquareShapeView}>
          <Text style={styles2.heading}>WELCOME</Text>
          <Text style={styles2.heading2}>Login to continue</Text>
      </View>  
      <View style={styles.rectShapeView}> 
      <ScrollView>
      <View style={styles3.margn}></View>
          <View style={styles.btnsview}>
          <View>
                <Text style={styles.log}
                      >Login</Text>
                       <View style={styles.lineview}></View>
                      </View>  
                <Text style={styles.log}
                      onPress={() => navigation.navigate('signupsc')}  
                      >Sign Up</Text>
          </View>
        
        <View style={styles3.margn1}></View>
        <View style={styles.SectionStyle}>
          <Image 
          source={require('./img/icusername.png')} style={styles.back5}/>
          <TextInput style={styles.input}
            placeholder={'Username'}
            placeholderTextColor={'#837E7E'}
            returnKeyType='next'
          />
          </View>
          <View style={styles.SectionStyle}>
          <Image 
            source={require('./img/icpass.png')} style={styles.back5}/>
          <TextInput style={styles.input}
            placeholder={'Password'}
            placeholderTextColor={'#837E7E'}
            returnKeyType='go'
            secureTextEntry
          />
          </View>
          <Text style={styles.log2}>Forgot Password?</Text>   
          </ScrollView> 
      </View>
      <View style={styles.circleview}>
              <TouchableOpacity style={styles.back2} onPress={() => navigation.navigate('Screen')}>
                      <Image 
                      source={require('./img/login.png')} style={styles.back2}
                      /> 
              </TouchableOpacity>
          </View>
          <View style={styles.lowerprt}>
          <Text style={styles.log3}>or Sign in With</Text>
      <View style={styles.btnsview} >
            
          <Image 
            source={require('./img/google.png')} style={styles.backg}/>
          <Image 
            source={require('./img/fb.png')} style={styles.backg}/>
      </View> 
      </View>   
  </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E2D9D9',
    alignItems: 'center',
  },
  btnsview: { 
    alignItems:"center",
    alignSelf:"stretch",
    flexDirection:"row",
    justifyContent:"space-evenly",
  },
  lowerprt: { 
    alignItems:"flex-end",
    alignSelf:"stretch",
    flexGrow:1,
    justifyContent:"space-evenly",
  },
  lineview: {
    height:5,
    backgroundColor: '#F4CD24',
  },
  circleview: {
    marginTop:-25,
    alignItems:"center",
    justifyContent:"center",
    borderRadius:100,
    width:50,
    height:50,
    backgroundColor: 'white',
  },
  SquareShapeView: {
    alignSelf:"stretch",
    height:"35%",
    backgroundColor: '#0C4C9C',
  },
  rectShapeView: {
    marginTop:-100,
    alignSelf:"stretch",
    marginHorizontal:15,
    backgroundColor: 'white',
    borderRadius:20,
    flexShrink:1
  },
  SectionStyle: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop:10,
    height: 45,
    marginHorizontal:40,
    borderRadius: 25,
    borderColor:'#1B4F8E',
    borderWidth:1,
    fontSize: 16,
    color: '#1855A1',
  },
  input: {
    flexGrow:1,
    height:45 ,
    borderRadius: 25,
    fontSize: 16,
    color: '#1855A1',
  },
  log:{
    fontSize:27,
    fontWeight:"600",
    color:'#294A72',
  },
  log2:{
    alignSelf:"flex-end",
    fontSize:10,
    color:'#B8C8DB',
    marginTop:10,
    marginBottom:50,
    marginHorizontal:50
  },

  log3:{
     
    justifyContent:"center",
    alignSelf:"center",
    fontSize:10,
    color:'black',
  },
  back2: {
    alignSelf:"center",
    width:42,
    height:42,
  },
  backg: {
    width:123,
    height:35,
    resizeMode:'contain' ,  
  }, 
  back5: {
  margin:10,
  width:24,
  height:24,
  padding:10,
  resizeMode:'contain',
  },
});


function signupsc({ navigation }) {
  return (
    
    <View style={styles.container}>
      <View style={styles.SquareShapeView}>
          <Text style={styles2.heading}>WELCOME</Text>
          <Text style={styles2.heading2}>SignUp to continue</Text>
      </View>
      <View style={styles.rectShapeView}>
      <ScrollView>
      <View style={styles3.margn}></View>
          <View style={styles.btnsview}>
                <Text style={styles.log} onPress={() => navigation.navigate('AppName')}  > 
                 Login</Text>
                 <View>
                <Text style={styles.log}>Sign Up</Text>
                <View style={styles.lineview}></View>
                </View>
          </View>  
          <View style={styles3.margn1}></View>
          <View style={styles.SectionStyle}>
                <Image 
                source={require('./img/icusername.png')} style={styles.back5}/>
                <TextInput style={styles.input}
                  placeholder={'Username'}
                  placeholderTextColor={'#837E7E'}
                  returnKeyType='next'
                />
          </View>
                
          <View style={styles.SectionStyle}>
                <Image 
                  source={require('./img/icpass.png')} style={styles.back5}/>
                <TextInput style={styles.input}
                  placeholder={'Password'}
                  placeholderTextColor={'#837E7E'}
                  returnKeyType='next'
                  secureTextEntry
                />
          </View>
          <View style={styles.SectionStyle}>
                <Image 
                  source={require('./img/icpass.png')} style={styles.back5}/>
                <TextInput style={styles.input}
                  placeholder={'Confirm Password'}
                  placeholderTextColor={'#837E7E'}
                  returnKeyType='go'
                  secureTextEntry
                />
          </View>
          <View style={styles.btnsview}>
                <Text style={styles1.male}>Male</Text>  
                <Text style={styles1.male}>Female</Text>
          </View>
          <Text style={styles1.log4}>By clicking agree you agree to our</Text>
          <Text style={styles1.tnc}
          onPress={() => Alert.alert('Terms and condition')}>terms and condition</Text>
      </ScrollView>
      </View>     
      <View style={styles.circleview}>
              <TouchableOpacity style={styles.back2} onPress={() => navigation.navigate('Screen')}>
                      <Image 
                      source={require('./img/login.png')} style={styles.back2}
                      /> 
              </TouchableOpacity>
          </View>
          <View style={styles.lowerprt}>
          <Text style={styles.log3}>or Sign in With</Text>
      <View style={styles.btnsview} >
            
          <Image 
            source={require('./img/google.png')} style={styles.backg}/>
          <Image 
            source={require('./img/fb.png')} style={styles.backg}/>
      </View> 
      </View>  
  </View>
  );
}
const styles1 = StyleSheet.create({
male:{
    fontWeight:'400',
    textAlign:"center",
    fontSize:16,
    padding:5,
    color:'white',
    marginTop:10,
    width:77,
    borderRadius: 25,
    backgroundColor:'#5691DF'
  },  
  log4:{
    marginTop:10,
    alignSelf:"center",
    fontSize:12,
    color:'black',
  },
  tnc:{
    alignSelf:"center",
    textDecorationLine:'underline',
    fontSize:12,
    color:'#FFBE00',
    marginBottom:50
  },
});

function Screen({route,navigation }) {
  const array=[{ name: '[Patient Name1]', number:"[Mobile no.]", patid:"[Patient ID]",bacteria:"[Details]"},]  
  const [DATA, setDATA] = useState([...array]);
  const deleteItemById = (id) => {
   const found= DATA.filter(({ patid }) =>( patid !== id || patid === '[Patient ID]' ))
   AsyncStorage.removeItem(id)
   setDATA(found);
   
  }
React.useEffect(()=>{{displayData()}},[route.params?.name,route.params?.number,route.params?.patid])

  const displayData=async () => {
    DATA.splice(1,DATA.length)
      let keys = await AsyncStorage.getAllKeys()
      AsyncStorage.multiGet(keys, (err, stores) => {
        stores.map((result, i, store) => {
        let value = JSON.parse(store[i][1]);      
       DATA.push(value)
        });
        setDATA([...DATA])
    });
  }
  return (
    
    <View style={styles.container}>
      <View style={styles2.SquareShapeView}> 
              <Text style={styles2.heading} 
              >Patients</Text>
              <Text style={styles2.heading2}>This is the list of your patients with Name, PhoneNo., Id and details of treatment or cancer type detected</Text>
      </View>
      <ScrollView style={styles2.itemfl}>
            <FlatList
              data={DATA}
              extraData={DATA}
              renderItem={({ item }) =>(<View style={styles2.item}>
                                        <View>
                                            <View style={{alignSelf:"stretch",justifyContent:"space-between",  marginRight: 20,  flexDirection:"row"}} >
                                              <Text style={{fontSize:20, fontWeight:'700'}}>{item.name}</Text>
                                              <Text style={{fontSize:10, height:18, width:18,borderRadius:20,fontWeight:'700',marginTop:5,backgroundColor:"#96c2ff",
                                                             borderColor:"#96c2ff",borderWidth:1.5, textAlign:"center",textAlignVertical:"center",color:"white"}}
                                                             onPress={() => deleteItemById(item.patid)}>X</Text>
                                              </View>
                                              <Text style={{fontSize:15,marginBottom:13, marginRight:20}}>{item.bacteria}</Text>                                           
                                        </View>
                                        <View style={{alignSelf:"stretch",justifyContent:"space-between",  marginRight: 20,  flexDirection:"row"}}>
                                        <Text style={{fontSize:12}}>{item.patid}</Text>
                                        <Text style={{fontSize:12}}>{item.number}</Text>   
                                        </View>
                                        </View>)
                          }
            /> 
      </ScrollView>
      <TouchableOpacity style={styles2.add} 
      onPress={() => navigation.navigate('General')
    }>
          <Image 
          source={require('./img/add.png')} style={styles2.add}
          /> 
      </TouchableOpacity>
     </View>

  );
}
  const styles2 = StyleSheet.create({
  SquareShapeView: {
    alignSelf:"stretch",
    height:"30%",
    backgroundColor: '#0C4C9C',
  },
  delbutt:{
    alignSelf:"stretch",
    justifyContent:"space-between",
    marginRight: 20,
    flexDirection:"row",
    backgroundColor:"yellow"
  },
  input: {
    height: 45,
    borderWidth:1,
    borderColor:'#707070',
    borderRadius: 10,
    fontSize: 16,
    paddingLeft: 45,
    color: '#1855A1',
    backgroundColor:'#EFECEC',
    marginTop:15,  
  },
  item: {
    justifyContent:"center",
    height:100,
    borderRadius:10,
    backgroundColor: 'white',
    marginTop:10 ,
    paddingLeft:20
  },
  itemsel: {
    fontSize:23,
    justifyContent:"center",
    height:70,
    borderRadius:10,
    backgroundColor: 'white',
    marginTop:10 ,
    paddingLeft:20,
    fontWeight:"bold",
    textAlignVertical:"center"
  },
  itemfl: {
    flexGrow:1,
    alignSelf:'stretch',
    marginTop:-60 ,
    marginHorizontal: 10,
  },
  heading:{
    marginTop:50,
    color:'white',
    fontWeight:'bold',
    fontSize:26,
    marginHorizontal: 25
  },
  heading2:{
    color:'white',
    fontSize:12,
    marginHorizontal: 25
  },
  add:{
    position:'absolute',
    bottom:'8%',
    right:'8%',
    height:60,
    width:60,   
    resizeMode:"contain"
  }  
});

function General({ navigation })
{   
const [name, setname] = React.useState('');
const [number, setnumber] = React.useState('');
const [patid, setpatid] = React.useState('');
const [selectedValue, setSelectedValue] = useState("Gender");

let patient={
  name:name, number:number, patid:patid
}

  const proceed = () => {
    if(name && number && patid){
      {navigation.navigate('Selection',{name:name,number:number,patid:patid})}
       }
    else
     {alert("Please fill data")
       }}
    return (
      
    <View style={styles.container}>
       <View style={styles.SquareShapeView}>
    <Text style={styles2.heading}  >General Details</Text>
       <Text style={styles2.heading2}>Enter the general details of your patient.</Text>
       </View>
       <View style={styles.rectShapeView}>
      <ScrollView>
      <View style={styles3.margn}>
      <TextInput style={styles3.input}
        placeholder={'Name'}
        placeholderTextColor={'#837E7E'}
        value={name}
        onChangeText={data=>setname(data)}
      />
      <TextInput style={styles3.input}
        placeholder={'Mobile Number'}
        placeholderTextColor={'#837E7E'}
        keyboardType='number-pad'
        value={number}
        onChangeText={setnumber}
      />
      <TextInput style={styles3.input}
        placeholder={'Patient ID'}
        placeholderTextColor={'#837E7E'}
        value={patid}
        onChangeText={setpatid}
      />
       <TouchableOpacity style={styles3.picktch}> 
       <Picker
        selectedValue={selectedValue}
        style={styles3.pick1}
        onValueChange={(itemValue) => setSelectedValue(itemValue)}
      >
        <Picker.Item label="        Gender" value="0"color="#837E7E"/>
        <Picker.Item label="        Male" value="male"color="#1855A1" />
        <Picker.Item label="        Female" value="female"color="#1855A1" />
      </Picker> 
       </TouchableOpacity> 
      <TextInput style={styles3.input}
        placeholder={'Age'}
        keyboardType='number-pad'
        placeholderTextColor={'#837E7E'}
      />
      </View>
      <View style={styles3.margn}></View>
      <View style={styles.btnsview}>
      <Text style={styles3.title}
             onPress={() =>navigation.navigate('Screen')}
              >Go Back</Text>
      <Text style={styles3.title}
           onPress={() => proceed()}
           >Proceed</Text> 
      </View>
     </ScrollView>
      <View style={styles3.margn}></View>
      </View>
      </View>
    );
  }
const styles3 = StyleSheet.create({
margn: {marginTop:25},
margn1: {marginTop:12},
rectShapeView: {
  marginTop:-100,
  alignSelf:"stretch",
  marginHorizontal:15,
  flexShrink:1,
  backgroundColor: 'white',
  borderRadius:20,
},
 pick1: {
  height: 40,
  margin:1.4,
  fontSize: 16,
  backgroundColor:'#EFECEC' 
  },
picktch: {
  height: 45,
  borderColor:'#707070',
  borderRadius:5,
  borderWidth:1,
  marginTop:15,
  backgroundColor:'#EFECEC',
  marginHorizontal:25
  },
  
 input: {
  height: 45,
  borderWidth:1,
  borderColor:'#707070',
  borderRadius: 5,
  fontSize: 16,
  paddingLeft: 45,
  color: '#1855A1',
  backgroundColor:'#EFECEC',
  marginHorizontal: 25,
  marginTop:15,  
},
 title: {
  marginTop:10,
  borderWidth:10,
  borderRadius:5,
  borderColor:"#1273EC",
  backgroundColor:"#1273EC",
  color:'white',
  fontWeight:'bold',
  textAlignVertical:'center',
  textAlign:'center',
  fontSize:15,
  width:100
  },
});

function Selection({route,navigation }) {
  return (

    
    <View style={styles.container}>
      <View style={styles2.SquareShapeView}> 
              <Text style={styles2.heading}>Select Cancer</Text>
              <Text style={styles2.heading2}>Choose the cancer with which patient is suffering from.</Text>
      </View>
      <ScrollView style={styles2.itemfl}>
        <Text  style={styles2.itemsel} onPress={() =>navigation.navigate('Lungcancer',{name:route.params?.name, number:route.params?.number, patid:route.params?.patid})}>
        Lungs Cancer</Text>
        <Text style={styles2.itemsel} onPress={() => navigation.navigate('Colorectal',{name:route.params?.name, number:route.params?.number, patid:route.params?.patid})}>
          Colorectal Cancer</Text>
        <Text style={styles2.itemsel} onPress={() =>navigation.navigate('Breast',{name:route.params?.name, number:route.params?.number, patid:route.params?.patid})}>
          Breast Cancer</Text>
     </ScrollView>
     </View>

  );
}

function Lungcancer({route,navigation }) {  
  const array=[<Text style={stylesch.botitem}>Select one from option below</Text>,
                <Text style={stylesch.botitem}>Test used to find cancer type? </Text>]

   const goback = (bacteria) => {
    let patient={
      name:route.params?.name, number:route.params?.number, patid:route.params?.patid, bacteria:bacteria
    }
    AsyncStorage.setItem(route.params?.patid,JSON.stringify(patient))
    {navigation.navigate('Screen',{name:route.params?.name, number:route.params?.number, patid:route.params?.patid})}  
  }; 
  const opt=[<Text style={stylesch.optitem1}  onPress={() => update0('Small Biopsy')}>Small Biopsy{"\n"}or Resection Sample</Text>,
             <Text style={stylesch.optitem1}  onPress={() => update0('Pleural Specimen')}>Pleural{"\n"}Specimen</Text>,
             <Text style={stylesch.optitem1}  onPress={() => update0('Type Already Known')}>Type Already{"\n"}Known</Text>]
  
  const [arrayholder,setarrayholder] = useState([array])
  const [option, setoption]= useState([opt])
  const update8 = (ar) => {
    if (ar=="p")
    {
      array.push(<Text style={stylesch.optitem}>Positive</Text>)
      array.push(<Text style={stylesch.botitem}>Treatment Suggestion:</Text>)
      array.push(<Text style={stylesch.botitem}>1) Osimertinib</Text>)
      opt.splice(0,opt.length)
      opt.push(<Text style={stylesch.optitem1}  onPress={ () => goback("Treatment- Osimertinib drug")}>Save Osimertinib</Text>)
      }
    if(ar=="n")
    {
      array.push(<Text style={stylesch.optitem}>Negative</Text>)
      array.push(<Text style={stylesch.botitem}>Treatment Suggestion:</Text>)
      array.push(<Text style={stylesch.botitem}>Continue Getfitinib, Eriotinib, Afatinib treatment</Text>)
      opt.splice(0,opt.length)
    opt.push(<Text style={stylesch.optitem1}  onPress={ () => goback("Treatment- Getfitnib, Eriotinib, Afatinib drug")}>Save{"\n"}Getfitnib, Eriotinib, Afatinib</Text>)
      } 
      setoption([...opt])
    setarrayholder([...array])
  } 

  const update7 = (ar) => {
    if (ar=="p")
    {
    array.push(<Text style={stylesch.optitem}>Primary Resistance</Text>)
      array.push(<Text style={stylesch.botitem}>Again Mutational analysis of KRAS, ALK, ROS1</Text>)
      opt.splice(0,opt.length)
      opt.push(<Text style={stylesch.optitem1}  onPress={() => update1('Adenocarcionoma')}>Done, Proceed.</Text>)
      }
    if(ar=="n")
    {
      array.push(<Text style={stylesch.optitem}>10-13 months Resistance</Text>)
      array.push(<Text style={stylesch.botitem}>Test EGFR p.T790M (from Biopsy or Liquid Biopsy)</Text>)
      opt.splice(0,opt.length)
      opt.push(<Text style={stylesch.optitem1}  onPress={() => update8('p')}>Positive</Text>,
      <Text style={stylesch.optitem1}  onPress={() => update8('n')}>Negative</Text>)
      } 
      setoption([...opt])
    setarrayholder([...array])
  } 
  const update6 = (ar) => {
      array.push(<Text style={stylesch.optitem}>Getfitinib, Eriotinib, Afatinib</Text>)
      array.push(<Text style={stylesch.botitem}>Resistance to drug?</Text>)
      opt.splice(0,opt.length)
      opt.push(<Text style={stylesch.optitem1}  onPress={() => update7('p')}>Primary{"\n"}Resistance</Text>,
      <Text style={stylesch.optitem1}  onPress={() => update7('n')}>Resistance{"\n"}(10-13 months)</Text>)
      setoption([...opt])
    setarrayholder([...array])
  } 
  const update5 = (ar) => {
    if (ar=="e")
    {array.push(<Text style={stylesch.optitem}>Exon 20 insertion </Text>)
      array.push(<Text style={stylesch.botitem}>Treatment Suggestion:</Text>)
      array.push(<Text style={stylesch.botitem}>1) Osimertinib</Text>)
      opt.splice(0,opt.length)
      opt.push(<Text style={stylesch.optitem1}  onPress={ () => goback("Treatment- Osimertinib drug")}>Save Osimertinib</Text>)
  
    }
    if(ar=="a")
    {
      array.push(<Text style={stylesch.optitem}>EGFR p.T790M</Text>)
      array.push(<Text style={stylesch.botitem}>Germline analysis of p.T790M</Text>,
                  <Text style={stylesch.botitem}>Genetic counselling as germline mutation associate with pre disposition to familial lung cancer</Text>)
      array.push(<Text style={stylesch.botitem}>Treatment Suggestion:</Text>,
        <Text style={stylesch.botitem}>1) Osimertinib</Text>)
        opt.splice(0,opt.length)
      opt.push(<Text style={stylesch.optitem1}  onPress={ () => goback("Treatment- Osimertinib drug")}>Save Osimertinib</Text>)
  
      } 
      if(ar=="b") 
      {
        array.push(<Text style={stylesch.optitem}>Exon 19 del, Exon 21 L858R, Exon 19 insertion</Text>)
        opt.splice(0,opt.length)
        array.push(<Text style={stylesch.botitem}>Treatment Suggestion:</Text>,
          <Text style={stylesch.botitem}>1) Getfitinib, Eriotinib, Afatinib </Text>,
          <Text style={stylesch.botitem}>2) Osimertinib</Text>)
        opt.push(<Text style={stylesch.optitem1}  onPress={() => update6('g')}>Getfitinib, Eriotinib, Afatinib</Text>,
                <Text style={stylesch.optitem1}  onPress={ () => goback("Treatment- Osimertinib drug")}>Save Osimertinib</Text>)
    
        } 
      setoption([...opt])
    setarrayholder([...array])
  } 
 
  const update4 = (ar) => {
    if(ar=="Alectenib")
    {
      array.push(<Text style={stylesch.optitem}>Alectenib</Text>)
      array.push(<Text style={stylesch.botitem}>Local therapy, continued Alectinib, Ceritinib, cytotoxic chemotherapy.</Text>)
      opt.splice(0,opt.length)
      opt.push(<Text style={stylesch.optitem1}  onPress={ () => goback("Treatment- Alectinib drug")}>Save Alectinib</Text>)
  
      } 
    if(ar=="Crizotenib")
    {
      array.push(<Text style={stylesch.optitem}>Crizotenib</Text>)
      array.push(<Text style={stylesch.botitem}>Ceritinib, Alectenib, Brigatinib, cytotoxic chemotherapy</Text>)
      opt.splice(0,opt.length)
      opt.push(<Text style={stylesch.optitem1}  onPress={ () => goback("Treatment- Crizotenib drug")}>Save Crizotenib</Text>)
  
      } 
      setoption([...opt])
    setarrayholder([...array])
  } 
  const update3 = (ar) => {
    if (ar=="e")
    {
      array.push(<Text style={stylesch.optitem}>EGFR mutation</Text>)
      array.push(<Text style={stylesch.botitem}>Select its type</Text>)
      opt.splice(0,opt.length)
      opt.push(<Text style={stylesch.optitem1}  onPress={() => update5('e')}>Exon 20{"\n"}insertion</Text>,
      <Text style={stylesch.optitem1}  onPress={() => update5('a')}>EGFR p.T790M</Text>,
      <Text style={stylesch.optitem1}  onPress={() => update5('b')}>Exon 19 del,{"\n"}Exon 21 L858R,{"\n"}Exon 19 insertion</Text>)
    }
    if(ar=="a")
    {
      array.push(<Text style={stylesch.optitem}>ALK rearrangement (5%)</Text>)
      array.push(<Text style={stylesch.botitem}>Treatment Suggestion:</Text>,
                 <Text style={stylesch.botitem}>1) Alectenib (preferred)</Text>,
                 <Text style={stylesch.botitem}>2) Crizotenib</Text>)
                 opt.splice(0,opt.length)
      opt.push(<Text style={stylesch.optitem1}  onPress={() => update4('Alectenib')}>Alectenib</Text>,
      <Text style={stylesch.optitem1}  onPress={() => update4('Crizotenib')}>Crizotenib</Text>,)
      } 
      if(ar=="b")
    {
      array.push(<Text style={stylesch.optitem}>BRAF V600E mutation (1-2%)</Text>)
      array.push(<Text style={stylesch.botitem}>Treatment Suggestion:</Text>,
                 <Text style={stylesch.botitem}>Dabrafenib/Trametinib</Text>,
                 <Text style={stylesch.botitem}>If not well tolerated, Vemurafenib</Text>,
                 )
                 opt.splice(0,opt.length)
      opt.push(<Text style={stylesch.optitem1}  onPress={() => goback('Treatment- Dabrafenib/Trametinib drug')}>Save{"\n"}Dabrafenib/Trametinib</Text>,
      <Text style={stylesch.optitem1}  onPress={() => goback('Treatment- Vemurafenib drug')}>Save{"\n"}Vemurafenib</Text>,)
      } 
      if(ar=="r")
      {
        array.push(<Text style={stylesch.optitem}>ROS1 rearrangement (1-2%)</Text>)
        array.push(<Text style={stylesch.botitem}>Treatment Suggestion:</Text>,
                   <Text style={stylesch.botitem}>1) Crizotenib (preferred)</Text>,
                   <Text style={stylesch.botitem}>2) Ceritinib</Text>
                   )
                   opt.splice(0,opt.length)
        opt.push(<Text style={stylesch.optitem1}  onPress={() => goback('Treatment- Crizotenib drug')}>Save Crizotenib</Text>,
        <Text style={stylesch.optitem1}  onPress={() => goback('Treatment- Ceritinib drug')}>Save Ceritinib</Text>,)
        } 
         if(ar=="k")
      {
        array.push(<Text style={stylesch.optitem}>KRAS mutation</Text>)
        array.push(<Text style={stylesch.botitem}>Sensitive to MEK or ERK inhibitors:</Text>,
                   <Text style={stylesch.botitem}>Treatment Suggestion:</Text>,
                   <Text style={stylesch.botitem}>Bimetinib, Cobimetinib, Trametinib</Text>,
                   )
                   opt.splice(0,opt.length)
        opt.push(<Text style={stylesch.optitem1}  onPress={() => goback('Treatment- Bimetinib, Cobimetinib, Trametinib drug')}>Save{"\n"}Bimetinib, Cobimetinib, Trametinib</Text>)
        } 
      setoption([...opt])
    setarrayholder([...array])
  }  

  const update2 = (ar) => { 
  if(ar=="a")
  {
      array.push(<Text style={stylesch.optitem}>Ambiguous</Text>)
      array.push(<Text style={stylesch.botitem}>Choose positive test among NapsinA or P63 or TTF1</Text>)
      opt.splice(0,opt.length)
      opt.push(<Text style={stylesch.optitem1}  onPress={() => update1('Napsin A')}>NapsinA</Text>,
        <Text style={stylesch.optitem1}  onPress={() => update1('P63')}>P63</Text>,
        <Text style={stylesch.optitem1}  onPress={() => update1('P63 and TTF1')}>P63 and TTF1</Text>)
    } 
    setoption([...opt])
  setarrayholder([...array])
}  
  
  const update1 = (ar) => {
    if (ar=="g")
    {
      array.push(<Text style={stylesch.optitem}>Can't Say</Text>)
      array.push(<Text style={stylesch.botitem}>Test IHC panel TTF-1, P40</Text>)
      opt.splice(0,opt.length)
      opt.push(<Text style={stylesch.optitem1}  onPress={() => update1('TTF1(-ve)\nP40(+ve)')}>TTF1(-ve){"\n"}P40(+ve)</Text>,
        <Text style={stylesch.optitem1}  onPress={() => update1('TTF1(+ve)\nP40(-ve)')}>TTF1(+ve){"\n"}P40(-ve)</Text>,
        <Text style={stylesch.optitem1}  onPress={() => update2('a')}>Ambiguous</Text>)
  
    }
    if (ar=='Squamous cell carcinoma'|| ar=='Mesothelioma')
    {
      array.push(<Text style={stylesch.optitem}>{ar}</Text>)
      array.push(<Text style={stylesch.botitem}>{ar} found</Text>)
      opt.splice(0,opt.length)
      opt.push(<Text style={stylesch.optitem1}  onPress={ () => goback("Cancer type-", ar)}>Save</Text>)
    }
    if (ar=='TTF1 (-ve), Napsin A (-ve)\nWT-1 (+ve), Calretinin (+ve)')
    {
      array.push(<Text style={stylesch.optitem}>{ar}</Text>)
      array.push(<Text style={stylesch.botitem}>Mesothelioma found</Text>)
      opt.splice(0,opt.length)
      opt.push(<Text style={stylesch.optitem1}  onPress={ () => goback("Cancer Type- Mesothelioma")}>Save</Text>)
    }
    if (ar=='TTF1(-ve)\nP40(+ve)'||ar=='P63')
    {
      array.push(<Text style={stylesch.optitem}>{ar}</Text>)
      array.push(<Text style={stylesch.botitem}>Squamous cell carcinoma found</Text>)
      opt.splice(0,opt.length)
      opt.push(<Text style={stylesch.optitem1}  onPress={ () => goback("Cancer Type- Squamous cell carcinoma found")}>Save</Text>)
    }
    if (ar=='TTF1(+ve)\nP40(-ve)'||ar=='Napsin A'||ar=='TTF1 (+ve), Napsin A (+ve)\nWT-1 (-ve), Calretinin (-ve)')
    {
      array.push(<Text style={stylesch.optitem}>{ar}</Text>)
      array.push(<Text style={stylesch.botitem}>Adenocarcionoma found</Text>)
        array.push(<Text style={stylesch.botitem}>Select the mutation</Text>)
        opt.splice(0,opt.length)
        opt.push(<Text style={stylesch.optitem1}  onPress={() => update3('e')}>EGFR</Text>,
        <Text style={stylesch.optitem1}  onPress={() => update3('a')}>ALK</Text>,
        <Text style={stylesch.optitem1}  onPress={() => update3('b')}>BRAF </Text>,
        <Text style={stylesch.optitem1}  onPress={() => update3('r')}>ROS1</Text>,
        <Text style={stylesch.optitem1}  onPress={() => update3('k')}>KRAS</Text>)
    }
    if(ar=='P63 and TTF1')
    { 
        array.push(<Text style={stylesch.optitem}>{ar}</Text>)
        array.push(<Text style={stylesch.botitem}>Squamous cell histology</Text>)
        array.push(<Text style={stylesch.botitem}>Select the mutation present</Text>)
        opt.splice(0,opt.length)
        opt.push(<Text style={stylesch.optitem1}  onPress={() => update3('e')}>EGFR</Text>,
        <Text style={stylesch.optitem1}  onPress={() => update3('a')}>ALK</Text>,
        <Text style={stylesch.optitem1}  onPress={() => update3('b')}>BRAF </Text>,
        <Text style={stylesch.optitem1}  onPress={() => update3('r')}>ROS1</Text>,
        <Text style={stylesch.optitem1}  onPress={() => update3('k')}>KRAS</Text>)
      } 
    if(ar=='Adenocarcionoma' || ar=='Adenosquamous carcinoma' || ar=='Squamous cell histology')
    { 
        array.push(<Text style={stylesch.optitem}>{ar}</Text>)
        array.push(<Text style={stylesch.botitem}>Which of the mutation is present? </Text>)
        opt.splice(0,opt.length)
        opt.push(<Text style={stylesch.optitem1}  onPress={() => update3('e')}>EGFR</Text>,
        <Text style={stylesch.optitem1}  onPress={() => update3('a')}>ALK</Text>,
        <Text style={stylesch.optitem1}  onPress={() => update3('b')}>BRAF </Text>,
        <Text style={stylesch.optitem1}  onPress={() => update3('r')}>ROS1</Text>,
        <Text style={stylesch.optitem1}  onPress={() => update3('k')}>KRAS</Text>)
      } 
      setoption([...opt])
    setarrayholder([...array])
  }

  const update0 = (ar) => {
    if (ar=="Small Biopsy" || ar=="Type Already Known" )
    {
      array.push(<Text style={stylesch.optitem}>{ar}</Text>)
      array.push(<Text style={stylesch.botitem}>What type of cancer is it?</Text>)
      opt.splice(0,opt.length)
      opt.push( <Text style={stylesch.optitem1}  onPress={() => update1('Adenocarcionoma')}>Adenocarcionoma</Text>,
      <Text style={stylesch.optitem1}  onPress={() => update1('Squamous cell carcinoma')}>Squamous cell{"\n"}carcinoma</Text>,
      <Text style={stylesch.optitem1}  onPress={() => update1('Adenosquamous carcinoma')}>Adenosquamous{"\n"}carcinoma</Text>,
      <Text style={stylesch.optitem1}  onPress={() => update1('g')}>Can't Say</Text>)
    }
    if(ar=="Pleural Specimen")
    {
        array.push(<Text style={stylesch.optitem}>{ar}</Text>)
        array.push(<Text style={stylesch.botitem}>Test for IHC panel TTF1, Napsin A, WT-1, Calretinin</Text>)
       opt.splice(0,opt.length)
        opt.push(<Text style={stylesch.optitem1}  onPress={() => update1('TTF1 (+ve), Napsin A (+ve)\nWT-1 (-ve), Calretinin (-ve)')}>TTF1 (+ve), Napsin A (+ve){"\n"}WT-1 (-ve), Calretinin (-ve)</Text>,
        <Text style={stylesch.optitem1}  onPress={() => update1('TTF1 (-ve), Napsin A (-ve)\nWT-1 (+ve), Calretinin (+ve)')}>TTF1 (-ve), Napsin A (-ve){"\n"}WT-1 (+ve), Calretinin (+ve)</Text>)
    }
    setoption([...opt])
    setarrayholder([...array])
    } 
  
  
  
      
    return (
      <View style={stylesch.container} >
      <View style={stylesch.margn}></View>
      <ScrollView  style={{height:"60%"}}>{arrayholder}</ScrollView>
      <Text style={stylesch.scroll}>Scroll for more</Text>
          <ScrollView horizontal={true} style={{flexDirection:"row",backgroundColor:"#c9c3c3"}}>
          {option}
          </ScrollView>
      </View>
    )
        }
  const stylesch = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor:"#E2D9D9"
    },
    margn: {marginTop:25},
    container2: {
      flexDirection:'row',
      flex: 1,
      justifyContent:'flex-end'
      
    },
    scroll:{
     
      justifyContent:"center",
      alignSelf:"flex-end",
      fontSize:12,
      marginRight:10,
      color:'black',
    },
    botitem: {
      fontSize:18,
      color:"white",
      backgroundColor: '#0C4C9C',
      alignSelf:'flex-start',
      justifyContent: 'center',
      marginTop: 10,
      marginLeft:10,
      marginRight:60,
      padding: 6,
      borderRadius:20,
      textAlignVertical:"center",
    },
    optitem: {
      fontSize:18,  
      backgroundColor: 'white',
      alignSelf:'flex-end',
      justifyContent: 'center',
      textAlignVertical:"center",
      marginTop:10,
      marginRight: 10,
      marginLeft:60,
      padding: 6,
      borderRadius:5,
      textAlign:"right"
      },
      optitem1: {
        fontSize:20,  
        backgroundColor: 'white',
        alignSelf:'center',
        justifyContent: 'center',
        textAlignVertical:"center",
        marginHorizontal:10,
        marginVertical: 10,
        padding: 6,
        borderRadius:5,
        textAlign:"center"
        },
    write: {
      fontSize:20,
      height: 50,
      borderColor: 'gray',
      borderWidth: 1,
      marginVertical: 10,
      marginHorizontal:10,
      borderRadius:20,
      padding:10,
      alignSelf:'flex-end',
      flexGrow:1,
    },
    send: {
      fontSize:20,
      height: 50,
      borderColor: 'gray',
      borderWidth: 1,
      marginVertical: 10,
      marginRight:10,
      borderRadius:20,
      padding:10,
      alignSelf:'flex-end',
    }
  });

function Colorectal({route,navigation }) {  
  const array=[<Text style={stylesch.botitem}>Select one from option below</Text>,
                <Text style={stylesch.botitem}>Select Age of The Patient. </Text>]

    const goback = (bacteria) => {
    let patient={
      name:route.params?.name, number:route.params?.number, patid:route.params?.patid, bacteria:bacteria
    }
    AsyncStorage.setItem(route.params?.patid,JSON.stringify(patient))
    {navigation.navigate('Screen',{name:route.params?.name, number:route.params?.number, patid:route.params?.patid})}    
  }; 
const opt=[<Text style={stylesch.optitem1}  onPress={() => update0('y')}>More than{"\n"}70</Text>,
              <Text style={stylesch.optitem1}  onPress={() => update0('n')}>Less or equal to{"\n"}70</Text>]
  
  const [arrayholder,setarrayholder] = useState([array])
  const [option, setoption]= useState([opt])

  const update6 = (ar) => {
    if (ar=="n")
    {
    array.push(<Text style={stylesch.optitem}>No</Text>)
    array.push(<Text style={stylesch.botitem}>Lynch like syndroms:{"\n"}Possibility of MUTYH associated polyposis (MAP) or Polymerase associated polyposis(PAP){"\n"}Analyze POLD1 and POLE</Text>)
      opt.splice(0,opt.length)
      opt.push(<Text style={stylesch.optitem1}  onPress={() => goback('Condition- Lynch like syndrome')}>Okay, Save</Text>)
      }
    if(ar=="y")
    {
      array.push(<Text style={stylesch.optitem}>Yes</Text>)
      array.push(<Text style={stylesch.botitem}>Pathogenic variant found in patient's blood cells.Test to detect same variant in Patients "at risk" relatives</Text>,
      <Text style={stylesch.botitem}>Request customized test to detect mutation found in proband</Text>)
      opt.splice(0,opt.length)
      opt.push(<Text style={stylesch.optitem1}  onPress={() => goback('Condition- Patient relatives at risk')}>Okay,Save</Text>)
      } 
      setoption([...opt])
    setarrayholder([...array])
  } 
  const update5 = (ar) => {
    if(ar=="y")
    {
      array.push(<Text style={stylesch.optitem}>Unresectable metachronous{"\n"}metastasis</Text>)
      array.push(<Text style={stylesch.botitem}>Treatment Suggestion:</Text>,
            <Text style={stylesch.botitem}>1) Nivolumab</Text>,
            <Text style={stylesch.botitem}>2) Pembrolizumab</Text>,
            <Text style={stylesch.botitem}>3) Other immunotherapies</Text>)
      opt.splice(0,opt.length)
      opt.push(<Text style={stylesch.optitem1}  onPress={ () => goback("Treatment- Nivolumab drug")}>Save{"\n"}Nivolumab</Text>,
      <Text style={stylesch.optitem1}  onPress={ () => goback("Treatment- Pembrolizumab drug")}>Save{"\n"}Pembrolizumab</Text>,
      <Text style={stylesch.optitem1}  onPress={ () => goback("Treatment- Immunotherapy drug")}>Save{"\n"}Other immunotherapies</Text> )
    } 
    if(ar=="n")
    {
    array.push(<Text style={stylesch.optitem}>Clinincal staging</Text>)
    array.push(<Text style={stylesch.botitem}>Stage II high risk{"\n"}Stage III?</Text>)
    array.push(<Text style={stylesch.botitem}>Treatment Suggestion:</Text>,
      <Text style={stylesch.botitem}>1) 5-FU</Text>,
      <Text style={stylesch.botitem}>2) FOLFOX</Text>)
    opt.splice(0,opt.length)
      opt.push(<Text style={stylesch.optitem1}  onPress={ () => goback("Treatment- 5FU drug")}>Save 5FU</Text>,
      <Text style={stylesch.optitem1}  onPress={ () => goback("Treatment- FOLFOX drug")}>Save FOLFOX</Text>)
  
      } 
      setoption([...opt])
    setarrayholder([...array])
  } 
  
  const update4 = (ar) => {
    if(ar=="y")
    {
      array.push(<Text style={stylesch.optitem}>Unresectable metachronous{"\n"}metastasis</Text>)
      array.push(<Text style={stylesch.botitem}>Best 5yr Survival:72% to 82% (depends on KRAS mutation)</Text>,
      <Text style={stylesch.botitem}>Select Mutational analysis of KRAS, NRAS.</Text>)
      opt.splice(0,opt.length)
      opt.push(<Text style={stylesch.optitem1}  onPress={() => update3('y')}>Mutated</Text>,
  <Text style={stylesch.optitem1}  onPress={() => update3('no')}>Wild type</Text>)
      } 
    if(ar=="n")
    {
      array.push(<Text style={stylesch.optitem}>Clinincal staging</Text>)
    array.push(<Text style={stylesch.botitem}>Stage I:Surveillance{"\n"}Stage II(low risk): Obseravation, clinical trial{"\n"}Stage II(high risk): 5FU</Text>)
      opt.splice(0,opt.length)
      opt.push(<Text style={stylesch.optitem1}  onPress={ () => goback("Clinical staging\nStageI: Surveillance")}>Save Stage I</Text>,
      <Text style={stylesch.optitem1}  onPress={ () => goback("Clinical staging\nStageII(low risk): clinical trials")}>Save Stage II(low risk)</Text>,
      <Text style={stylesch.optitem1}  onPress={ () => goback("Clinical staging\nStageII(high risk): On 5FU")}>Save Stage II(high risk): 5FU</Text>)
  
      } 
      setoption([...opt])
    setarrayholder([...array])
  } 
  const update3 = (ar) => {
    if (ar=="y")
    {
      array.push(<Text style={stylesch.optitem}>Mutated</Text>)
      array.push(<Text style={stylesch.botitem}>This will cause resistance to anti-EGFR therapy</Text>,
      <Text style={stylesch.botitem}>So Treatment Suggestion:</Text>,
      <Text style={stylesch.botitem}>FOLFIRI/Irinotican</Text> )
      opt.splice(0,opt.length)
      opt.push(<Text style={stylesch.optitem1}  onPress={() =>goback('Treatment- FOLFIRI/Irinotican drug')}>Save FOLFIRI/Irinotican</Text>)
    }
    if(ar=="n")
    {
      array.push(<Text style={stylesch.optitem}>Wild Type</Text>)
      array.push(<Text style={stylesch.botitem}>Treatment Suggestion:</Text>,
                  <Text style={stylesch.botitem}>Irinotican + Cetuximab + Vemurafenib</Text>)
                  opt.splice(0,opt.length)
      opt.push(<Text style={stylesch.optitem1}  onPress={() =>goback('Treatment- Irinotican + Cetuximab + Vemurafenib drugs')}>Save Irinotican + Cetuximab{"\n"} + Vemurafenib</Text>)
      } 
      if(ar=="no")
      {
        array.push(<Text style={stylesch.optitem}>Wild Type</Text>)
        array.push(<Text style={stylesch.botitem}>Treatment Suggestion:</Text>,
                    <Text style={stylesch.botitem}>1)Chemotherapy alone</Text>,
                    <Text style={stylesch.botitem}>2)Chemotherapy + Cetuximab, Panitumumab (Anti EGFR therapy)</Text>)
                    opt.splice(0,opt.length)
        opt.push(<Text style={stylesch.optitem1}  onPress={() => goback('Treatment- Chemotherapy')}>Save Chemotherapy</Text>,
        <Text style={stylesch.optitem1}  onPress={() => goback('Treatment- Chemotherapy + Cetuximab,Panitumumab')}>Save Chemotherapy with{'\n'}Chemo+Cetuximab,Panitumumab</Text>,)
        }   
    
      setoption([...opt])
    setarrayholder([...array])
  }  

  const update2 = (ar) => { 
  if(ar=="splus")
  {
      array.push(<Text style={stylesch.optitem}>MSI Stable and BRAF(+ve)</Text>)
      array.push(<Text style={stylesch.botitem}>Unresectable metachronous metastasis</Text>)
      array.push(<Text style={stylesch.botitem}>Conditions:{"\n"}1) Worst 5 yr survival: 50%{"\n"}2) Old onset in females{"\n"}3) Usually proximal colon{"\n"}4) Prevalent in smokers</Text>,
                  <Text style={stylesch.botitem}>Select Mutational analysis of KRAS, NRAS.</Text>)
      opt.splice(0,opt.length)
      opt.push(<Text style={stylesch.optitem1}  onPress={() => update3('y')}>Mutated</Text>,
  <Text style={stylesch.optitem1}  onPress={() => update3('n')}>Wild type</Text>)
    } 
if(ar=="sminus")
{
    array.push(<Text style={stylesch.optitem}>MSI Stable and BRAF(-ve)</Text>)
    array.push(<Text style={stylesch.botitem}>Unresectable metachronous metastasis or Clinical staging</Text>)
    opt.splice(0,opt.length)
    opt.push(<Text style={stylesch.optitem1}  onPress={() => update4('y')}>Unresectable metachronous{"\n"}metastasis</Text>,
<Text style={stylesch.optitem1}  onPress={() => update4('n')}>Clinical staging</Text>)
  } 
if(ar=="hplus")
{
    array.push(<Text style={stylesch.optitem}>MSI-H and BRAF(+ve)</Text>)
    array.push(<Text style={stylesch.botitem}>Conditions:{"\n"}1) Best 5 yr survival: 90%{"\n"}2) Old onset in females{"\n"}3) Usually proximal colon{"\n"}4) Eligible for immunotherapy{"\n"}5) Usually develop from serrated polyps{"\n"}6) Somatic in origin and NOT germline</Text>)
    array.push(<Text style={stylesch.botitem}>Unresectable metachronous metastasis or Clinical staging</Text>)
    opt.splice(0,opt.length)
    opt.push(<Text style={stylesch.optitem1}  onPress={() => update5('y')}>Unresectable metachronous{"\n"}metastasis</Text>,
<Text style={stylesch.optitem1}  onPress={() => update5('n')}>Clinical staging</Text>)
  } 
  if(ar=="hminus")
{
    array.push(<Text style={stylesch.optitem}>MSI-H and BRAF(-ve)</Text>)
    array.push(<Text style={stylesch.botitem}>Conditions:{"\n"}1) Best 5 yr survival: 93%{"\n"}2) Youngest onset{"\n"}3) Usually proximal colon{"\n"}4) Check for family history{"\n"}5) Indicating Lynch Syndrome or other inherited condition</Text>)
    array.push(<Text style={stylesch.botitem}>Request for Germline mutational analysis of MLH1, MSH2, MSH6, PMS2, EPCAM</Text>)
    opt.splice(0,opt.length)
    opt.push(<Text style={stylesch.optitem1}  onPress={() => update6('y')}>Yes</Text>,
<Text style={stylesch.optitem1}  onPress={() => update6('n')}>No</Text>)
  }  
  setoption([...opt])
setarrayholder([...array])
}  
  
  const update1 = (ar) => {
    if (ar=="n")
    {
      array.push(<Text style={stylesch.optitem}>No</Text>)
      array.push(<Text style={stylesch.botitem}>Stop, Age is more than 70</Text>)
      opt.splice(0,opt.length)
      opt.push(<Text style={stylesch.optitem1}  onPress={() => goback("Treatment- Stopped, Age >70 yrs")}>Save</Text>)
  
    }
    if (ar=="y")
    {
      array.push(<Text style={stylesch.optitem}>Yes</Text>)
      array.push(<Text style={stylesch.botitem}>Test for MSI, BRAF, KRAS, NRAS mutations</Text>)
      opt.splice(0,opt.length)
      opt.push(<Text style={stylesch.optitem1}  onPress={() => update2("splus")}>MSI Stable{"\n"}BRAF(+ve)</Text>,
      <Text style={stylesch.optitem1}  onPress={() => update2("sminus")}>MSI Stable{"\n"}BRAF(-ve)</Text>,
      <Text style={stylesch.optitem1}  onPress={() => update2("hplus")}>MSI-H{"\n"}BRAF(+ve)</Text>,
      <Text style={stylesch.optitem1}  onPress={() => update2("hminus")}>MSI-H{"\n"}BRAF(+ve)</Text>)
    }
      setoption([...opt])
    setarrayholder([...array])
  }

  const update0 = (ar) => {
    if (ar=="y")
    {
      array.push(<Text style={stylesch.optitem}>More than 70</Text>)
      array.push(<Text style={stylesch.botitem}>Family history showing cancer afflicted member</Text>)
      opt.splice(0,opt.length)
      opt.push( <Text style={stylesch.optitem1}  onPress={() => update1('y')}>Yes</Text>,
      <Text style={stylesch.optitem1}  onPress={() => update1('n')}>No</Text>)
    }
    if(ar=="n")
    {
        array.push(<Text style={stylesch.optitem}>Less or Equal to 70</Text>)
        array.push(<Text style={stylesch.botitem}>Test for MSI, BRAF, KRAS, NRAS mutations</Text>)
        opt.splice(0,opt.length)
        opt.push(<Text style={stylesch.optitem1}  onPress={() => update2("splus")}>MSI Stable{"\n"}BRAF(+ve)</Text>,
        <Text style={stylesch.optitem1}  onPress={() => update2("sminus")}>MSI Stable{"\n"}BRAF(-ve)</Text>,
        <Text style={stylesch.optitem1}  onPress={() => update2("hplus")}>MSI-H{"\n"}BRAF(+ve)</Text>,
        <Text style={stylesch.optitem1}  onPress={() => update2("hminus")}>MSI-H{"\n"}BRAF(-ve)</Text>)
    }
    setoption([...opt])
    setarrayholder([...array])
    } 
  
  
  
      
    return (
      <View style={stylesch.container} >
      <View style={stylesch.margn}></View>
      <ScrollView  style={{height:"60%"}}>{arrayholder}</ScrollView>
      <Text style={stylesch.scroll}>Scroll for more</Text>
          <ScrollView horizontal={true} style={{flexDirection:"row",backgroundColor:"#c9c3c3"}}>
          {option}
          </ScrollView>
      </View>
    )}

function Breast({route,navigation }) {  
  const array=[<Text style={stylesch.botitem}>Select one from option below</Text>,
                <Text style={stylesch.botitem}>Recurrent/ Stage IV ER+, PR+, HER2- Breast cancer </Text>,
                <Text style={stylesch.botitem}>Pre-menopausal or Post-menopausal</Text>
              ]

    const goback = (bacteria) => {
    let patient={
      name:route.params?.name, number:route.params?.number, patid:route.params?.patid, bacteria:bacteria
    }
    AsyncStorage.setItem(route.params?.patid,JSON.stringify(patient))
    {navigation.navigate('Screen',{name:route.params?.name, number:route.params?.number, patid:route.params?.patid})}    
  }; 
const opt=[<Text style={stylesch.optitem1}  onPress={() => update0('pre')}>Pre-menopausal</Text>,
              <Text style={stylesch.optitem1}  onPress={() => update0('post')}>Post-menopausal</Text>]
  
  const [arrayholder,setarrayholder] = useState([array])
  const [option, setoption]= useState([opt])

  const update2 = (ar) => { 
  if(ar=="ppn")
  {
      array.push(<Text style={stylesch.optitem}>ER(+ve), PR(+ve),Her2(-ve)</Text>)
      array.push(<Text style={stylesch.botitem}>Treatment Suggestion:</Text>)
      array.push(<Text style={stylesch.botitem}>1) Anastrazole/ Letrozole</Text>,
                <Text style={stylesch.botitem}>2) Exemestane</Text>,
                <Text style={stylesch.botitem}>3) Exemestane + Everolimus</Text>,
                <Text style={stylesch.botitem}>4) Everolimus + Fulvestrant</Text>,
                <Text style={stylesch.botitem}>5) Everolimus + Tamoxifen</Text>,
                <Text style={stylesch.botitem}>6) Paibociclib + Aromatase Inhibitor(AI)</Text>,
                <Text style={stylesch.botitem}>7) Paibociclib + Fulvestrant</Text>,
                <Text style={stylesch.botitem}>8) Ribociclib + AI</Text>,
                <Text style={stylesch.botitem}>9) Abemaciclib + AI</Text>,
                <Text style={stylesch.botitem}>10) Fulvestrant</Text>)
      opt.splice(0,opt.length)
      opt.push(<Text style={stylesch.optitem1}  onPress={() => goback('Test- ER+, PR+, Her2-')}>Save</Text>)
    }  
  setoption([...opt])
setarrayholder([...array])
}  
  
  const update1 = (ar) => {
    if (ar=="n")
    {
      array.push(<Text style={stylesch.optitem}>Already done</Text>)
      array.push(<Text style={stylesch.botitem}>A combination of aromatase inhibitors (AI)</Text>,
      <Text style={stylesch.botitem}>Relapse or metastasis</Text>,
      <Text style={stylesch.botitem}>Test ER, PR Her2 by IHC{"\n"}ER,PR by IHC{"\n"}Her2 by FISH</Text>)
      opt.splice(0,opt.length)
      opt.push( <Text style={stylesch.optitem1}  onPress={() => update2('ppn')}>ER(+ve), PR(+ve),{"\n"}Her2(-ve)</Text>,
      <Text style={stylesch.optitem1}  onPress={() => update2('nnp')}>ER(-ve), PR(-ve),{"\n"}Her2(+ve)</Text>,
      <Text style={stylesch.optitem1}  onPress={() => update2('tnbc')}>TNBC</Text>)
    }
      setoption([...opt])
    setarrayholder([...array])
  }

  const update0 = (ar) => {
    if (ar=="pre")
    {
      array.push(<Text style={stylesch.optitem}>Pre-menopausal</Text>)
      array.push(<Text style={stylesch.botitem}>Treatment Ovarian ablation/ suppression, Category I</Text>)
      opt.splice(0,opt.length)
    opt.push( <Text style={stylesch.optitem1}  onPress={() => goback('Treatment- Ovarian ablation/ suppression')}>Save Treatment</Text>,
      <Text style={stylesch.optitem1}  onPress={() => update1('n')}>Already done</Text>)
    }
    if(ar=="post")
    {
        array.push(<Text style={stylesch.optitem}>Post-menopausal</Text>)
        array.push(<Text style={stylesch.botitem}>A combination of aromatase inhibitors (AI)</Text>,
                   <Text style={stylesch.botitem}>Relapse or metastasis</Text>,
                   <Text style={stylesch.botitem}>Test ER, PR Her2 by IHC{"\n"}ER,PR by IHC{"\n"}Her2 by FISH</Text>)
        opt.splice(0,opt.length)
    opt.push( <Text style={stylesch.optitem1}  onPress={() => update2('ppn')}>ER(+ve), PR(+ve),{"\n"}Her2(-ve)</Text>,
          <Text style={stylesch.optitem1}  onPress={() => update2('nnp')}>ER(-ve), PR(-ve),{"\n"}Her2(+ve)</Text>,
          <Text style={stylesch.optitem1}  onPress={() => update2('tnbc')}>TNBC</Text>)
    }
    setoption([...opt])
    setarrayholder([...array])
    } 
  
  
  
      
    return (
      <View style={stylesch.container} >
      <View style={stylesch.margn}></View>
      <ScrollView  style={{height:"60%"}}>{arrayholder}</ScrollView>
      <Text style={stylesch.scroll}>Scroll for more</Text>
          <ScrollView horizontal={true} style={{flexDirection:"row",backgroundColor:"#c9c3c3"}}>
          {option}
          </ScrollView>
      </View>
    )}
          
const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator headerMode='none'>
        <Stack.Screen name="Screen" component={Screen} /> 
        <Stack.Screen name="General" component={General} />
        <Stack.Screen name="Selection" component={Selection} />
        <Stack.Screen name="Lungcancer" component={Lungcancer} />
        <Stack.Screen name="Colorectal" component={Colorectal} />
        <Stack.Screen name="Breast" component={Breast} />
        <Stack.Screen name="AppName" component={loginsc} />
        <Stack.Screen name="signupsc" component={signupsc} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;