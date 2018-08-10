let arr = [ {
  "Rule": "ProductionFormationDataCheck",
  "Tests": "NoSpecialCharacters, NoNumbers",
  "Score": "Mean"
},
{
  "Rule": "PrimaryDirectionDataCheck",
  "Tests": "NoSpaces, NoSpecialCharacters, SetValues_PreDefined1",
  "Score": "Sum"
},
{
  "Rule": "APINumberDataCheck",
  "Tests": "NumberOnly, FixedLength, NonNegative",
  "Score": "Sum"
},
{
  "Rule": "PrimaryMaterialDataCheck",
  "Tests": "NoSpecialCharacters, SetValues_PreDefined2",
  "Score": "Mean"
},
{
  "Rule": "GUWIDNonNullCheck",
  "Tests": "NumberOnly, NonNegative, NonNull, NonDecimal",
  "Score": "Lowest"
},
{
  "Rule": "GenericStringCheck",
  "Tests": "NonNumber, NoSpecialCharacters",
  "Score": "Sum"
},
{
  "Rule": "LattitudeDataCheck",
  "Tests": "NoSpecialCharacters, MaxLength1, SetRange_PreDefined1",
  "Score": "Lowest"
},
{
  "Rule": "LongitudeDataCheck",
  "Tests": "NoSpecialCharacters, MaxLength2, SetRange_PreDefined2",
  "Score": "Lowest"
}
]

formatToArray = function(arr){
  return arr.split(",");
}

formatToString = function(arr){
  return arr.join(",");
}
// x is one object from the array at a time, but x is not iterable so we can use Object.keys()
// you have to return the modified array element, so that will be the object inside the array, which in this case is the modified product
arr.map((product, index)=>{
  product["Tests"] = formatToArray(product["Tests"])
})
console.log(arr)

console.log("\n\n")
arr.map((product,  index)=>{
  product["Tests"] = formatToString(product["Tests"]);
})
console.log(arr)




// OUTPUT
[ { Rule: 'ProductionFormationDataCheck',
    Tests: [ 'NoSpecialCharacters', ' NoNumbers' ],
    Score: 'Mean' },
  { Rule: 'PrimaryDirectionDataCheck',
    Tests: [ 'NoSpaces', ' NoSpecialCharacters', ' SetValues_PreDefined1' ],
    Score: 'Sum' },
  { Rule: 'APINumberDataCheck',
    Tests: [ 'NumberOnly', ' FixedLength', ' NonNegative' ],
    Score: 'Sum' },
  { Rule: 'PrimaryMaterialDataCheck',
    Tests: [ 'NoSpecialCharacters', ' SetValues_PreDefined2' ],
    Score: 'Mean' },
  { Rule: 'GUWIDNonNullCheck',
    Tests: [ 'NumberOnly', ' NonNegative', ' NonNull', ' NonDecimal' ],
    Score: 'Lowest' },
  { Rule: 'GenericStringCheck',
    Tests: [ 'NonNumber', ' NoSpecialCharacters' ],
    Score: 'Sum' },
  { Rule: 'LattitudeDataCheck',
    Tests: [ 'NoSpecialCharacters', ' MaxLength1', ' SetRange_PreDefined1' ],
    Score: 'Lowest' },
  { Rule: 'LongitudeDataCheck',
    Tests: [ 'NoSpecialCharacters', ' MaxLength2', ' SetRange_PreDefined2' ],
    Score: 'Lowest' } ]



[ { Rule: 'ProductionFormationDataCheck',
    Tests: 'NoSpecialCharacters, NoNumbers',
    Score: 'Mean' },
  { Rule: 'PrimaryDirectionDataCheck',
    Tests: 'NoSpaces, NoSpecialCharacters, SetValues_PreDefined1',
    Score: 'Sum' },
  { Rule: 'APINumberDataCheck',
    Tests: 'NumberOnly, FixedLength, NonNegative',
    Score: 'Sum' },
  { Rule: 'PrimaryMaterialDataCheck',
    Tests: 'NoSpecialCharacters, SetValues_PreDefined2',
    Score: 'Mean' },
  { Rule: 'GUWIDNonNullCheck',
    Tests: 'NumberOnly, NonNegative, NonNull, NonDecimal',
    Score: 'Lowest' },
  { Rule: 'GenericStringCheck',
    Tests: 'NonNumber, NoSpecialCharacters',
    Score: 'Sum' },
  { Rule: 'LattitudeDataCheck',
    Tests: 'NoSpecialCharacters, MaxLength1, SetRange_PreDefined1',
    Score: 'Lowest' },
  { Rule: 'LongitudeDataCheck',
    Tests: 'NoSpecialCharacters, MaxLength2, SetRange_PreDefined2',
    Score: 'Lowest' } ]
