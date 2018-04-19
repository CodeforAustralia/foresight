<?xml version="1.0" encoding="UTF-8"?>
<StyledLayerDescriptor version="1.0.0" xmlns="http://www.opengis.net/sld" xmlns:ogc="http://www.opengis.net/ogc"
  xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
  xsi:schemaLocation="http://www.opengis.net/sld http://schemas.opengis.net/sld/1.0.0/StyledLayerDescriptor.xsd">
  <NamedLayer>
    <Name>MaxFDI_SFC</Name>
    <UserStyle>
      <Name>MaxFDI_SFC</Name>
      <Title>MaxFDI Color style</Title>
      <Abstract>Color bins</Abstract>
      <FeatureTypeStyle>
        <Rule>
          <RasterSymbolizer>
            <Opacity>1.0</Opacity>
            <ColorMap type="intervals">
              <ColorMapEntry color="#7AC142" quantity="11" label=" Low-Moderate"/>
              <ColorMapEntry color="#00AEEF" quantity="24" label=" High"/>
              <ColorMapEntry color="#FAFD9F" quantity="34" label=" Very High &lt;35"/>
              <ColorMapEntry color="#FFF000" quantity="49" label=" Very High &#x2265;35"/>
              <ColorMapEntry color="#F89829" quantity="99" label=" Severe"/>
              <ColorMapEntry color="#EE2E24" quantity="149" label=" Extreme"/>
              <ColorMapEntry color="#850C06" quantity="600" label=" &gt;Extreme*"/>
           

            </ColorMap>
          </RasterSymbolizer>
        </Rule>
      </FeatureTypeStyle>
    </UserStyle>
  </NamedLayer>
</StyledLayerDescriptor>