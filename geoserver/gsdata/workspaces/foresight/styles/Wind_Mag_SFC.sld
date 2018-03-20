<?xml version="1.0" encoding="UTF-8"?>
<StyledLayerDescriptor version="1.0.0" xmlns="http://www.opengis.net/sld" xmlns:ogc="http://www.opengis.net/ogc"
  xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
  xsi:schemaLocation="http://www.opengis.net/sld http://schemas.opengis.net/sld/1.0.0/StyledLayerDescriptor.xsd">
  <NamedLayer>
    <Name>Wind_Mag_SFC</Name>
    <UserStyle>
      <Name>Wind_Mag_SFC</Name>
      <Title>Wind_Mag Color style</Title>
      <Abstract>Color bins</Abstract>
      <FeatureTypeStyle>
        <Rule>
          <RasterSymbolizer>
            <Opacity>1.0</Opacity>
            <ColorMap type="intervals">
              <ColorMapEntry color="#EFF8FD" quantity="0" label=" 0  — 5" />
              <ColorMapEntry color="#CCF0FE" quantity="5" label=" 5  — 10" />
              <ColorMapEntry color="#9CDBFC" quantity="10" label=" 10  — 15" />
              <ColorMapEntry color="#D2F5AF" quantity="15" label=" 15  — 20" />
              <ColorMapEntry color="#8FDA8A" quantity="20" label=" 20  — 25" />
              <ColorMapEntry color="#E6E675" quantity="25" label=" 25  — 30" />
              <ColorMapEntry color="#FF7D4B" quantity="30" label=" 30  — 35" />
              <ColorMapEntry color="#E5270C" quantity="35" label=" 35  — 45" />
              <ColorMapEntry color="#990200" quantity="45" label=" &gt; 45" />
              
            </ColorMap>
          </RasterSymbolizer>
        </Rule>
      </FeatureTypeStyle>
    </UserStyle>
  </NamedLayer>
</StyledLayerDescriptor>