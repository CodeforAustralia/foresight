<?xml version="1.0" encoding="UTF-8"?>
<StyledLayerDescriptor version="1.0.0" xmlns="http://www.opengis.net/sld" xmlns:ogc="http://www.opengis.net/ogc"
  xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
  xsi:schemaLocation="http://www.opengis.net/sld http://schemas.opengis.net/sld/1.0.0/StyledLayerDescriptor.xsd">
  <NamedLayer>
    <Name>Chaines_SFC</Name>
    <UserStyle>
      <Name>Chaines_SFC</Name>
      <Title>Chaines Color style</Title>
      <Abstract>Color bins</Abstract>
      <FeatureTypeStyle>
        <Rule>
          <RasterSymbolizer>
            <Opacity>1.0</Opacity>
            <ColorMap type="intervals">
              <ColorMapEntry color="#D4D4D4" quantity="-127" label=" No Data" opacity="0" />
              <ColorMapEntry color="#00AEEF" quantity="5" label="  0  — 5" />
              <ColorMapEntry color="#FFF000" quantity="8" label="  5  — 8" />
              <ColorMapEntry color="#F89829" quantity="10" label="  8  — 10" />
              <ColorMapEntry color="#EE2E24" quantity="12" label=" 10  — 12" />
              <ColorMapEntry color="#963F39" quantity="20" label=" > 12" />
              
            </ColorMap>
          </RasterSymbolizer>
        </Rule>
      </FeatureTypeStyle>
    </UserStyle>
  </NamedLayer>
</StyledLayerDescriptor>