<?xml version="1.0" encoding="UTF-8"?>
<StyledLayerDescriptor version="1.0.0" xmlns="http://www.opengis.net/sld" xmlns:ogc="http://www.opengis.net/ogc"
  xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
  xsi:schemaLocation="http://www.opengis.net/sld http://schemas.opengis.net/sld/1.0.0/StyledLayerDescriptor.xsd">
  <NamedLayer>
    <Name>FFDI_SFC</Name>
    <UserStyle>
      <Name>FFDI_SFC</Name>
      <Title>FFDI Color style</Title>
      <Abstract>Color bins</Abstract>
      <FeatureTypeStyle>
        <Rule>
          <RasterSymbolizer>
            <Opacity>1.0</Opacity>
            <ColorMap type="intervals">
              <ColorMapEntry color="#7AC142" quantity="11" label=" 0  — 11 Low-Moderate"/>
              <ColorMapEntry color="#00AEEF" quantity="24" label=" 12  — 24 High"/>
              <ColorMapEntry color="#FAFD9F" quantity="34" label=" 25  — 34 Very High A"/>
              <ColorMapEntry color="#FFF000" quantity="49" label=" 35  — 49 Very High B"/>
              <ColorMapEntry color="#F89829" quantity="74" label=" 50  — 74 Severe"/>
              <ColorMapEntry color="#EE2E24" quantity="99" label=" 75  — 99 Extreme"/>
              <ColorMapEntry color="#850C06" quantity="109" label=" &#x2265; 100*"/>
           

            </ColorMap>
          </RasterSymbolizer>
        </Rule>
      </FeatureTypeStyle>
    </UserStyle>
  </NamedLayer>
</StyledLayerDescriptor>